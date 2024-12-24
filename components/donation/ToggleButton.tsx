'use client';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDonationType } from "@/redux/donationSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const ToggleButton = () => {
    const dispatch =  useDispatch();
    const {donationType} = useSelector((state: RootState) => state.donation); 
    
    return <div className="flex justify-centeritems-center m-5">
        <button onClick={() => {
                    dispatch(setDonationType('ONE_TIME'));
                }}
                className={`flex-1 px-4 py-2 border-blue-500 ${donationType === 'ONE_TIME' ? `bg-blue-500 text-white`:`bg-white text-blue-500`}`}>
            One-time
        </button>
        <button onClick={()=>{
                    dispatch(setDonationType('MONTHLY'));
                }} 
                className={`flex-1 px-4 py-2 border-blue-500 ${donationType === 'MONTHLY' ? `bg-blue-500 text-white`:`bg-white text-blue-500`}`}>
            Monthly
        </button>
    </div>
}