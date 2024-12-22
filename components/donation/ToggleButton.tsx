'use client';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DONATION_TYPE, setDonationType } from "@/redux/donationSlice";

export const ToggleButton = () => {
    const [selectedButton,setSelectedButton] = useState("button1");
    const dispatch =  useDispatch();
    
    return <div className="flex justify-centeritems-center m-5">
        <button onClick={() => {
                    setSelectedButton("button1");
                    dispatch(setDonationType(DONATION_TYPE.ONE_TIME));
                }}
                className={`flex-1 px-4 py-2 border-blue-500 ${selectedButton === 'button1' ? `bg-blue-500 text-white`:`bg-white text-blue-500`}`}>
            One-time
        </button>
        <button onClick={()=>{
                    setSelectedButton("button2");
                    dispatch(setDonationType(DONATION_TYPE.MONTHLY));
                }} 
                className={`flex-1 px-4 py-2 border-blue-500 ${selectedButton === 'button2' ? `bg-blue-500 text-white`:`bg-white text-blue-500`}`}>
            Monthly
        </button>
    </div>
}