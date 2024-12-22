'use client'
import { DonationBar } from "@/components/donation/DonationBar";
import { RazorpayButton } from "@/components/donation/RazorpayButton";
import { setUserInfo } from "@/redux/donationSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function(){
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state: RootState) => state.donation);

    return <div>
        <DonationBar
            title="Payment"
            currentPage={3}
            hrefNext="/donate/payment"
            hrefPrev="/donate/user-information"
        >
            <div className="flex justify-center items-center m-10">
                <RazorpayButton/>
            </div>

            <div className="flex m-5">
                <input
                    type="checkbox"
                    id="includeProcessing"
                    checked = {userInfo.includeProcessing}
                    onChange={(e) => {dispatch(setUserInfo({includeProcessing:true}))}}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700 flex justify-center items-center">
                    Optionally add $0.70 to cover processing fees
                </label>
            </div>
        </DonationBar>
    </div>
}