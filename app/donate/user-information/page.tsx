'use client';
import { DonationBar } from '@/components/donation/DonationBar';
import { DonationButton } from '@/components/donation/DonationButton';
import { DropdownItem } from '@/components/donation/DropdownItem';
import { setUserInfo } from '@/redux/donationSlice';
import { RootState } from '@/redux/store';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function () {
  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [isNextClicked, setIsNextClicked] = useState(false);
  const { userInfo, donationType, customAmount } = useSelector(
    (state: RootState) => state.donation
  );

  const validationRules = {
    firstName: (value: string) =>
      value.trim() ? null : 'First Name is required.',
    lastName: (value: string) =>
      value.trim() ? null : 'Last Name is required.',
    email: (value: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? null
        : 'Please enter a valid email address.',
    address: (value: string) => (value.trim() ? null : 'Addres is required.'),
    city: (value: string) => (value.trim() ? null : 'City is required'),
    state: (value: string) => (value.trim() ? null : 'State is required.'),
    postalCode: (value: string) =>
      /^\d{6}$/.test(String(value))
        ? null
        : 'Postal code must be a 6 digit number.',
  };

  const validateField = (type: keyof typeof validationRules, value: string) => {
    const rule = validationRules[type as keyof typeof validationRules];
    return rule ? rule(value) : null;
  };

  const handleChange = (type: keyof typeof validationRules, value: string) => {
    const error = validateField(type, value);
    setErrors((prev) => ({ ...prev, [type]: error }));

    if (!error) {
      dispatch(setUserInfo({ [type]: value }));
    }
  };

  const validateAll = () => {
    const newErrors: Record<keyof typeof validationRules, string | null> =
      {} as Record<keyof typeof validationRules, string | null>;

    (Object.keys(validationRules) as (keyof typeof validationRules)[]).forEach(
      (key) => {
        const value =
          key === 'postalCode' ? String(userInfo[key]) : userInfo[key];
        newErrors[key] = validateField(key, value);
      }
    );
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === null);
  };

  const UserDetails = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    email: userInfo.email,
    country: userInfo.country,
    address: userInfo.address,
    city: userInfo.city,
    postalCode: Number(userInfo.postalCode),
    state: userInfo.state,
  };

  const onNext = async () => {
    setIsNextClicked(true);
    if (!validateAll()) return;

    if (!userInfo.agreed) {
      setErrors((prev) => ({
        ...prev,
        agreed: 'You must agree to the terms.',
      }));
      return; // Stop form submission if checkbox is not checked
    }

    try {
      const response = await axios.post('/api/user', UserDetails);
      const userId = response.data.user.id;
      router.push(`/donate/payment?userId=${userId}`);
    } catch (e) {
      console.error('Error saving user details', e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name as keyof typeof validationRules, value);
  };

  return (
    <div>
      <DonationBar
        title="Information"
        currentPage={2}
        hrefPrev="/donate/donation-form"
        onNext={onNext}
      >
        <div className="flex justify-center mt-5">
          {/* firstName */}
          <div className="relative m-5">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className={`block w-full px-3 py-2 bg-transparent border ${errors.firstName ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          {/* lastname */}
          <div className="relative m-5">
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              className={`block w-full px-3 py-2 bg-transparent border ${errors.lastName ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="relative m-5">
          <input
            type="text"
            placeholder="email"
            name="email"
            className={`block w-full px-3 py-2 bg-transparent border ${errors.email ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <DropdownItem title="Country" type="country">
          <option value="india">India</option>
        </DropdownItem>

        {/* Address */}
        <div className="relative m-5">
          <input
            type="text"
            placeholder="address"
            name="address"
            className={`block w-full px-3 py-2 bg-transparent border ${errors.address ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
            onChange={handleInputChange}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        <div className="flex justify-center">
          {/* Postal code */}
          <div className="relative m-5">
            <input
              type="text"
              placeholder="postal code"
              name="postalCode"
              className={`block w-full px-3 py-2 bg-transparent border ${errors.postalCode ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
              onChange={handleInputChange}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>
            )}
          </div>
          {/* City */}
          <div className="relative m-5">
            <input
              type="text"
              placeholder="city"
              name="city"
              className={`block w-full px-3 py-2 bg-transparent border ${errors.city ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        {/* State */}
        <div className="relative m-5">
          <input
            type="text"
            placeholder="state"
            name="state"
            className={`block w-full px-3 py-2 bg-transparent border ${errors.state ? 'border-red-500' : 'border-blue-500'} rounded-lg`}
            onChange={handleInputChange}
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>

        <div className="flex justify-center m-5">
          <input
            type="checkbox"
            id="terms"
            checked={userInfo.agreed}
            onChange={(e) => {
              dispatch(setUserInfo({ agreed: e.target.checked }));
            }}
            className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
          />
          <label className="text-gray-700">
            By donating with this form, you agree to our{' '}
            <Link
              href={'/policies/privacy_policy'}
              className="cursor-pointer text-blue-500"
            >
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link
              href={'/policies/terms&conditions'}
              className="cursor-pointer text-blue-500"
            >
              Terms of Service
            </Link>
          </label>
        </div>
        <div>
          {isNextClicked && !userInfo.agreed && (
            <p className="text-red-500 text-sm mt-1 ml-5">
              You must agree to the terms.
            </p>
          )}
        </div>

        <DonationButton
          onClick={onNext}
          title={`Donate ${customAmount}rs  ${donationType === 'one-time' ? '(One-time)' : '(Monthly)'}`}
          isLast={false}
        />
      </DonationBar>
    </div>
  );
}
