'use client'
import { setUserInfo } from "@/redux/donationSlice";
import { useDispatch } from "react-redux";

export const InputBox = ({placeholder,type}:{placeholder:string;type:string}) => {
    const dispatch = useDispatch();

    return <div className="relative m-5">
        <input
            type="text"
            className="block w-full px-3 py-2 bg-transparent border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
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
                    dispatch(setUserInfo({postalCode: e.target.value}))
                } else if (type === 'city'){
                    dispatch(setUserInfo({city: e.target.value}))
                }
            }}
        />
        <label className="absolute top-2 left-3 text-grey-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-blue-500">
            {placeholder}
        </label>
    </div>
}