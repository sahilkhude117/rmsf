'use client'
import { DonationBar } from "@/components/donation/DonationBar";
import { DonationButton } from "@/components/donation/DonationButton";
import { DropdownItem } from "@/components/donation/DropdownItem";
import { InputBox } from "@/components/donation/InputBox";
import { setUserInfo } from "@/redux/donationSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function(){
    const router = useRouter();
    const dispatch = useDispatch();
    const {userInfo,donationType,customAmount} = useSelector((state: RootState) => state.donation);

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
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setUserInfo({
            anonymous : e.target.checked,
          })
        );
      };

    const handleAgreedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(
          setUserInfo({
            agreed : e.target.checked,
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
                <InputBox placeholder="First Name" type="firstName" />
                <InputBox placeholder="Last Name" type="lastName" />
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


                <InputBox placeholder="Email" type="email"/>

                <DropdownItem title="Country" type="country">
                    <option value="india">India</option>
                </DropdownItem>

                <InputBox placeholder="Address" type="address"/>
                <div className="flex justify-center">
                    <InputBox placeholder="Postal Code" type="postalcode"/>
                    <InputBox placeholder="City" type="city"/>
                </div>
                <InputBox placeholder="State" type="state"/>
            

            <div className="flex justify-center m-5">
                <input
                    type="checkbox"
                    id="terms"
                    checked={userInfo.agreed}
                    onChange={handleAgreedChange}
                    className="w-5 h-5 text-blue-500 border-blue-500 rounded cursor-pointer focus:ring-blue-500 mr-2"
                />
                <label className="text-gray-700">
                     By donating with this form, you agree to our <Link href={"/policies/privacy_policy"} className="cursor-pointer text-blue-500">Privacy Policy</Link> and <Link href={"/policies/terms&conditions"} className="cursor-pointer text-blue-500" >Terms of Service</Link>  
                </label>
            </div>

            <DonationButton onClick={async() => {
                // be call
                try {
                    const response = await axios.post('/api/user', UserDetails);
                    const userId = response.data.user.id;
                    router.push(`/donate/payment?userId=${userId}`);
                } catch (e) {
                    console.error("Error saving user details", e);
                }
            }} title={`Donate ${customAmount}  ${donationType === 'one-time' ? '(One-time)' : '(Monthly)'}`} isLast={false}/>
            </DonationBar>
    </div>
}