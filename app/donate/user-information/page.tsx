'use client'
import { DonationBar } from "@/components/donation/DonationBar";
import { DonationButton } from "@/components/donation/DonationButton";
import { DropdownItem } from "@/components/donation/DropdownItem";
import { setUserInfo } from "@/redux/donationSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function(){
    const router = useRouter();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<Record<string,string | null>>({});
    const {userInfo,donationType,customAmount} = useSelector((state: RootState) => state.donation);

    const validateAllInputs = () => {
        const newErrors: Record<string, string | null> = {};

        if (!userInfo.firstName?.trim()) {
            newErrors.firstName = "First Name is required.";
          }
          if (!userInfo.lastName?.trim()) {
            newErrors.lastName = "Last Name is required.";
          }
          if (!userInfo.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)) {
            newErrors.email = "Please enter a valid email address.";
          }
          if (!userInfo.address?.trim()) {
            newErrors.address = "Address is required.";
          }
          if (!userInfo.city?.trim()) {
            newErrors.city = "City is required.";
          }
          if (!userInfo.state?.trim()) {
            newErrors.state = "State is required.";
          }
          if (!userInfo.postalCode || !/^\d{6}$/.test(String(userInfo.postalCode))) {
            newErrors.postalCode = "Postal code must be a six-digit number.";
          }
          if (!userInfo.agreed) {
            newErrors.agreed = "You must agree to the terms.";
          }

          setErrors(newErrors);
          return Object.values(newErrors).every((error) => error === null);
    };

    const UserDetails = {
        firstName : userInfo.firstName,
        lastName : userInfo.lastName,
        email : userInfo.email,
        country : userInfo.country,
        address : userInfo.address,
        city : userInfo.city,
        postalCode : Number(userInfo.postalCode),
        state : userInfo.state,
    }

    const onNext = async () => {
        const isValid = validateAllInputs();
        if(!isValid) return;

        try {
            const response = await axios.post('/api/user', UserDetails);
            const userId = response.data.user.id;
            router.push(`/donate/payment?userId=${userId}`);
        } catch (e) {
            console.error("Error saving user details", e);
        }
    
    }

    const handleChange = (value: string, type: string) => {
        dispatch(setUserInfo({ [type]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [type]: null })); // Clear error on input
      };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setUserInfo({
            anonymous : e.target.checked,
          })
        );
      };

    return <div>
        <DonationBar
            title="Information"
            currentPage={2}
            hrefPrev="/donate/donation-form"
            hrefNext="/donate/payment"
        >
            <div className="flex justify-center mt-5">
                {/* firstName */}
                <div className="relative m-5">
                    <input
                        type="text"
                        placeholder="First Name"
                        className={`block w-full px-3 py-2 bg-transparent border ${errors.firstName ? "border-red-500" : "border-blue-500"} rounded-lg`}
                        onChange={(e) => { handleChange(e.target.value,"firstName")}}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                {/* lastname */}
                <div className="relative m-5">
                    <input
                        type="text"
                        placeholder="last name"
                        className={`block w-full px-3 py-2 bg-transparent border ${errors.lastName ? "border-red-500" : "border-blue-500"} rounded-lg`}
                        onChange={(e) => { handleChange(e.target.value,"lastName")}}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
            </div>

            <div className="flex m-5">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    checked={userInfo.anonymous}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700 flex justify-center items-center">
                    Make donation anonymous 
                </label>
            </div>
                {/* Email */}
                <div className="relative m-5">
                    <input
                        type="text"
                        placeholder="email"
                        className={`block w-full px-3 py-2 bg-transparent border ${errors.email ? "border-red-500" : "border-blue-500"} rounded-lg`}
                        onChange={(e) => { handleChange(e.target.value,"email")}}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <DropdownItem title="Country" type="country">
                    <option value="india">India</option>
                </DropdownItem>

                {/* Address */}
                <div className="relative m-5">
                    <input
                        type="text"
                        placeholder="address"
                        className={`block w-full px-3 py-2 bg-transparent border ${errors.address ? "border-red-500" : "border-blue-500"} rounded-lg`}
                        onChange={(e) => { handleChange(e.target.value,"address")}}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div className="flex justify-center">
                    {/* Postal code */}
                    <div className="relative m-5">
                        <input
                            type="text"
                            placeholder="postal code"
                            className={`block w-full px-3 py-2 bg-transparent border ${errors.postalCode ? "border-red-500" : "border-blue-500"} rounded-lg`}
                            onChange={(e) => { handleChange(e.target.value,"postalCode")}}
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                    </div>
                    {/* City */}
                    <div className="relative m-5">
                        <input
                            type="text"
                            placeholder="city"
                            className={`block w-full px-3 py-2 bg-transparent border ${errors.city ? "border-red-500" : "border-blue-500"} rounded-lg`}
                            onChange={(e) => { handleChange(e.target.value,"city")}}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                </div>
                
                {/* State */}
                <div className="relative m-5">
                    <input
                        type="text"
                        placeholder="state"
                        className={`block w-full px-3 py-2 bg-transparent border ${errors.state ? "border-red-500" : "border-blue-500"} rounded-lg`}
                        onChange={(e) => { handleChange(e.target.value,"state")}}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
            
            <div className="flex justify-center m-5">
                <input
                    type="checkbox"
                    id="terms"
                    checked={userInfo.agreed}
                    onChange={(e) => {
                        dispatch(setUserInfo({ agreed : e.target.checked }))
                    }}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700">
                     By donating with this form, you agree to our <Link href={"/policies/privacy_policy"} className="cursor-pointer text-blue-500">Privacy Policy</Link> and <Link href={"/policies/terms&conditions"} className="cursor-pointer text-blue-500" >Terms of Service</Link>  
                </label>
                {errors.agreed && (
                <p className="text-red-500 text-sm mt-1">{errors.agreed}</p>
          )}
            </div>

            <DonationButton onClick={onNext} title={`Donate ${customAmount}rs  ${donationType === 'one-time' ? '(One-time)' : '(Monthly)'}`} isLast={false}/>
            </DonationBar>
    </div>
}