'use client';
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setCustomAmount } from "@/redux/donationSlice";


export const AmountPreset = () => {
    const amount = ['5', '10', '50', '100']
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
                    dispatch(setCustomAmount(Number(amount)));
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
                placeholder="0"
                value={customAmount.toString()}
                onChange={(e) => dispatch(setCustomAmount(Number(e.target.value)))}
                className="block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg"
              />
            </div>
    </div>
}