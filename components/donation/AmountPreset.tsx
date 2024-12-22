'use client';
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setCustomAmount } from "@/redux/donationSlice";


export const AmountPreset = () => {
    const amount = ['$5', '$10', '$50', '$100']
    const [selectedButton,setSelectedButton] = useState("button1");
    const dispatch = useDispatch();
    const {customAmount} = useSelector(
      (state: RootState) => state.donation
    );

    return <div>
        <div className="grid grid-cols-2 gap-4 m-5">
              {amount.map((amount) => (
                <button
                  key={amount}
                  onClick={()=>{
                    setSelectedButton(amount);
                    dispatch(setCustomAmount(amount));
                  }}    
                  className={`w-full text-center py-3 border border-blue-500 rounded-lg ${selectedButton === amount ? `bg-blue-500`: `bg-white`} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative m-5">
              <input
                type="number"
                placeholder="$"
                value={customAmount}
                onChange={(e) => dispatch(setCustomAmount(e.target.value))}
                className="block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label className="absolute top-2 left-3 pl-3 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-blue-500">
                Custom Amount
              </label>
            </div>
    </div>
}