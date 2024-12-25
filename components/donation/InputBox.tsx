'use client'
import { setUserInfo } from "@/redux/donationSlice";
import { useDispatch } from "react-redux";

export const InputBox = ({placeholder,type}:{placeholder:string;type:string}) => {
    const dispatch = useDispatch();

    return <div className="relative m-5">
        <input
            type="text"
            placeholder={placeholder}
            className={`block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg`}
            onChange={(e) => {
                if(type === 'firstName'){
                    dispatch(setUserInfo({firstName : e.target.value}));
                } else if (type === 'lastName'){
                    dispatch(setUserInfo({lastName : e.target.value}));
                } else if (type === 'email'){
                    dispatch(setUserInfo({email : e.target.value}));
                } else if(type === 'address'){
                    dispatch(setUserInfo({address : e.target.value}));
                } else if(type === 'state'){
                    dispatch(setUserInfo({state : e.target.value}));
                } else if (type == 'postalcode'){
                    dispatch(setUserInfo({postalCode: Number(e.target.value)}))
                } else if (type === 'city'){
                    dispatch(setUserInfo({city: e.target.value}))
                }
            }}
        />
    </div>
}