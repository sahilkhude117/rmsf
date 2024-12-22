'use client'

import { usePathname, useRouter } from "next/navigation"

export const Button = ({href,text}:{href:string;text:string}) => {
    const router = useRouter();
    const pathname = usePathname();
    const pathsplit = pathname.split('/');
    const basepath = pathsplit[1] || '';
    const selected = basepath === 'donate'
    return <div className="flex">
        <button onClick={() => {
                    router.push(href);
                }}
                type="button"
                className={`text-white font-extrabold text-xl rounded-lg px-5 py-2 text-center ${selected ? 'bg-orange-600':'bg-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300'}`}>
            {text}
        </button>
    </div>
}
