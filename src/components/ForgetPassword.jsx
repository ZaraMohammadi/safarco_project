import { useState } from "react";

const ForgetPassword = () =>{


    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");

    const [isHidePass, setIsHidePass]= useState(true);

    const handleHidePass = ()=> setIsHidePass(!isHidePass);

    const [isHideRepPass, setIsHideRepPass]= useState(true);

    const handleHideRepPass = ()=> setIsHideRepPass(!isHideRepPass);


    return(  <>
        <div className="flex flex-col items-center justify-center mb-12 mt-7">
            <p></p>
            <span className=" text-xl font-semibold text-gray-700">تغییر رمز عبور</span>
            
        </div>
        <span className="text-xs flex items-start justify-start">رمز عبور باید حداقل 8 حرفی باشد </span>

        <label className=' text-naturalGray-200 text-sm' htmlFor="pass">رمز عبور جدید</label>
        <div className='flex p-2 mb-5 ring-1 ring-naturalGray-200 focus-within:ring-accent-300 outline-none rounded'>
            <input type={isHidePass?"password":"text"} name='pass' id='pass' className='flex text-sm  outline-none w-full'
                placeholder='' value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleHidePass}>
            {
                isHidePass?(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                ):(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                )

            }
                </button>
        </div>

        <label className='text-sm text-naturalGray-200' htmlFor="reppass">تکرار رمز عبور جدید</label>
        <div className='flex p-2 mb-2 ring-1 ring-naturalGray-200 focus-within:ring-accent-300 outline-none rounded'>
            <input type={isHideRepPass?"password":"text"} name='reppass' id='reppass' className='text-sm  outline-none w-full'
                placeholder='' value={repPassword} onChange={(e) => setRepPassword(e.target.value)}
                />
                <button onClick={handleHideRepPass}>
            {
                isHideRepPass?(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                ):(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                )

            }
                </button>
        </div>
        
        <div className="flex flex-col items-center">
            <button
            //onClick={handleIsAccept}
            className="bg-secondary-400 text-gray-700 p-2 w-full rounded mt-10"
            >
            تـغــییر رمـــــز
            </button>
        </div>
    </>)
}

export default ForgetPassword;