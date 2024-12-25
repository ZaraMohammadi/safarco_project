import React, { useState , useEffect } from 'react';
import axios from 'axios';

const EnterPassword = ({isEnterPassword,handleCloseModal, handleGoToOTP,handleForgetPassword,mobile}) =>{ 

    const correctPassword='Zahra1234';

    const [isHidePass, setIsHidePass]= useState(true);

    const [password, setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [passwordErrorColor,setPasswordErrorColor]=useState(false);

    const [isAccept,setIsAccept] = useState(false);
   
    const handleHidePass = ()=> setIsHidePass(!isHidePass);

    const handleIsAccept = ()=> 
        {

            setPassword(password);
            LoginWithPassword();
            setIsAccept(!isAccept)
        
        };



        const LoginWithPassword = async()=>{

           try{
               const response = await axios.post(
              "https://safarico.liara.run/api/login/password",
              {
                phone:mobile,
                password:password,
              }
            ); const m=response.data;
            console.log(response.data);
            console.log(m['message']);
            setPasswordError(m['message']);
            setPasswordErrorColor(true);
           // console.log(m['token']);
            localStorage.setItem("token", JSON.stringify(m['token']));
            const Token =JSON.parse( localStorage.getItem("token"));
            console.log(Token);
            }catch(error){
                if (error.response && error.response.status === 400){
                    console.log("رمز عبور نادرست است.");
                    setPasswordError("رمز عبور نادرست است.")
                   
                }
                if (error.response && error.response.status === 422){
                    console.log("خطای اعتبارسنجی");
                    setPasswordError("خطای اعتبارسنجی")
                   
                }
            }
          
          }


    useEffect(() => {
        if (isEnterPassword && passwordErrorColor) {
          const timer = setTimeout(() => {
            handleCloseModal();
          }, 1500);
          return () => clearTimeout(timer);
        }
      }, [isEnterPassword,passwordErrorColor]);


      useEffect(() => { 
        if(isAccept){
          if(password !== "" && passwordError == "رمز عبور نادرست است."){
            setPasswordError("رمز اشتباه است")
            setPasswordErrorColor(false);
            handleIsAccept();
    
          }else if(password !== "" && passwordError == "ورود موفقیت‌آمیز بود."){
            setPasswordError("ورود با موفقیت انجام شد")
            setPasswordErrorColor(true);
            handleIsAccept();
    
          }else if(password == ""){
            setPasswordError("لطفا رمز را وارد کنید");
            setPasswordErrorColor(false);
            handleIsAccept();
    
          } }
       }, [password,isAccept]);

    return(
        <>
            <div className="flex flex-col items-center justify-center mb-12 mt-7">
                <p className={`text-sm  ${passwordErrorColor ? 'text-green-500 ' : 'text-red-500' } `}>{passwordError}</p>
                <span className=" text-xl font-semibold text-gray-700">رمز عبور خود را وارد کنید</span>
            </div>

            <div className='flex p-2 mb-2 ring-1 ring-naturalGray-200 focus-within:ring-accent-300 outline-none rounded'>
  
                <input type={isHidePass?"password":"text"} name='pass' id='pass' className='text-sm  outline-none w-full'
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
            <div className="flex flex-col justify-center " >
                <span onClick={handleGoToOTP} className="flex items-center text-xs text-accent-300 mr-1 mt-5 cursor-pointer">ورود با رمز یکبار مصرف  
                    <svg className="w-3 h-3 text-accent-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </span>
                <span onClick={handleForgetPassword} className="flex items-center text-xs text-accent-300 mr-1 mt-2 cursor-pointer">فراموشی رمز عبور
                     <svg className="w-3 h-3 text-accent-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </span>
            </div>
            <div className="flex flex-col items-center">
                <button
                onClick={handleIsAccept}
                className="bg-secondary-400 text-gray-700 p-2 w-full rounded mt-10"
                >
                تاییـــــد
                </button>
            </div>
        </>)
}
export default EnterPassword;