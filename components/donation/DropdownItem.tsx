'use client'
import { setCampaign, setUserInfo } from "@/redux/donationSlice";
import { useDispatch } from "react-redux";

export const DropdownItem = ({title,children,type}:{title:string;children?:React.ReactNode;type:string}) => {
    const dispatch = useDispatch();

    return <div className="m-5">
        <div className="mb-2 text-blue-500">{title}</div>
        <select onChange={(e) => {
                    if(type === 'campaign'){
                        dispatch(setCampaign(e.target.value));
                    } else {
                        dispatch(setUserInfo({country:e.target.value}))
                    }
        1       }} 
                className=" w-full px-3 py-2 border border-blue-500 rounded-lg">
              {children}
        </select>
    </div>
}