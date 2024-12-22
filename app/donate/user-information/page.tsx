'use client'
import { DonationBar } from "@/components/donation/DonationBar";
import { DonationButton } from "@/components/donation/DonationButton";
import { DropdownItem } from "@/components/donation/DropdownItem";
import { InputBox } from "@/components/donation/InputBox";
import { setUserInfo } from "@/redux/donationSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function(){
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state: RootState) => state.donation);

    return <div>
        <DonationBar
            title="Information"
            currentPage={2}
            hrefPrev="/donate/donation-form"
            hrefNext="/donate/payment"
        >
            <div className="flex justify-center mt-5">
                <InputBox placeholder="First Name" type="firstName" />
                <InputBox placeholder="Last Name" type="lastName" />
            </div>

            <div className="flex m-5">
                <input
                    type="checkbox"
                    id="isAnonymous"
                    checked = {userInfo.anonymous}
                    onChange={() => {dispatch(setUserInfo({anonymous:true}))}}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700 flex justify-center items-center">
                    Make donation anonymous 
                </label>
            </div>


                <InputBox placeholder="Email" type="email"/>

                <DropdownItem title="Country" type="country">
                    <option value="">India</option>
                </DropdownItem>

                <InputBox placeholder="Address" type="address"/>
                <div className="flex justify-center">
                    <InputBox placeholder="Postal Code" type="postalCode"/>
                    <InputBox placeholder="City" type="city"/>
                </div>
                <InputBox placeholder="State" type="state"/>
            

            <div className="flex justify-center m-5">
                <input
                    type="checkbox"
                    id="terms"
                    checked = {userInfo.agreed}
                    onChange={() => {dispatch(setUserInfo({agreed:true}))}}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700">
                     By donating with this form, you agree to our <Link href={"/policies/privacy_policy"} className="cursor-pointer text-blue-500">Privacy Policy</Link> and <Link href={"/policies/terms&conditions"} className="cursor-pointer text-blue-500" >Terms of Service</Link>  
                </label>
            </div>

            <DonationButton hrefNext="/donate/payment" title="Next" isLast={false}/>

        </DonationBar>
    </div>
}