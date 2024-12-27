'use client';
import { DonationBar } from '@/components/donation/DonationBar';
import { ToggleButton } from '@/components/donation/ToggleButton';
import { DropdownItem } from '@/components/donation/DropdownItem';
import { Comment } from '@/components/donation/Comment';
import { DonationButton } from '@/components/donation/DonationButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCustomAmount } from '@/redux/donationSlice';

export default function () {
  const router = useRouter();
  const amount = ['5', '10', '50', '100'];
  const [selectedButton, setSelectedButton] = useState('button1');
  const [inputError, setInputError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { customAmount } = useSelector((state: RootState) => state.donation);

  const handleCustomAmountChange = (amount: string) => {
    const numericValue = Number(amount);

    // Validation for custom amount
    if (numericValue < 1 || isNaN(numericValue)) {
      setInputError('Amount must be greater than 1');
      return;
    }

    setInputError(null); // Clear error if valid
    dispatch(setCustomAmount(numericValue));
  };

  const onNext = () => {
    const amount = Number(customAmount);
    // Validate customAmount on Next button click
    if (amount < 1 || isNaN(amount)) {
      setInputError('Amount must be greater than 1');
      return;
    }

    setInputError(null); // Clear error if valid
    router.push('/donate/user-information');
  };

  return (
    <div>
      <DonationBar
        title="Choose Amount"
        currentPage={1}
        hrefPrev="/donate/donation-form"
        onNext={onNext}
      >
        <ToggleButton />

        {/* Amount Preset */}

        <div>
          <div className="grid grid-cols-2 gap-4 m-5">
            {amount.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedButton(amount);
                  dispatch(setCustomAmount(Number(amount)));
                  setInputError(null);
                }}
                className={`w-full text-center py-3 border border-blue-500 rounded-lg ${selectedButton === amount ? `bg-blue-500` : `bg-white`} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150`}
              >
                {amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative m-5">
            <input
              type="number"
              placeholder="0"
              value={customAmount.toString()}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg"
            />
            {inputError && (
              <p className="text-red-500 text-sm mt-1">{inputError}</p>
            )}
          </div>
        </div>

        <DropdownItem title="Campaign" type="campaign">
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="cooperation">Cooperation</option>
        </DropdownItem>
        <Comment />
        <DonationButton onClick={onNext} title="Next" isLast={false} />
      </DonationBar>
    </div>
  );
}
