import { useState, useEffect} from 'react';
import OtpInput from './OtpInput';
import CountdownTimer from './CountdownTimer';
import axios from 'axios';

//const correctOTP = "1234" // validate from your server
    //its a variable to pass to OTP modal
    const numberOfDigits=4;

const EnterOTP = ({mobile, isOTP, handleCloseModal,handleEnterPassword,isUserWithPass,setisUserWithPass,seconds,setSeconds})=>{

    
    const [isContinue,setIsContinue]=useState(false);

    const [otpError, setOtpError] = useState(" ");
    const [errorColor,setErrorColor]=useState(false);

    //const [SMSOTP,setSMSOTP] = useState('');

    const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));

    //its a variable to set option "Enter with Passsword"
    //const isUserWithPass=true;

    
    
    const [otpMassage,setotpMassage]=useState('');
    const VerifyUser = async()=>{

        const otpcode=otp.join("");
        //setSMSOTP(otpcode);
        console.log(otpcode);
       // console.log(otpcode.join(""));
    
       try{
           const response = await axios.post(
          "https://safarico.liara.run/api/verify",
          {
            phone:mobile,
            verification_code:otpcode,
          }
        ); const m=response.data;
        console.log(response.data);
        setotpMassage(m['message']);
        console.log(m['message']);
       // console.log(m['token']);
        localStorage.setItem("token", JSON.stringify(m['token']));
        const Token =JSON.parse( localStorage.getItem("token"));
        console.log(Token);
        }catch(error){
            if (error.response && error.response.status === 400){
                console.log("کد شما اشتباه است");
                setOtpError("کد اشتباه است")
               
            }
        }
      
      }
    
      useEffect(() => { 
        if(isContinue){
          if(otp.join("") !== "" && otpMassage=='کد شما اشتباه است'){
            setErrorColor(false);
            setOtpError("کد اشتباه است")
            handleContinue();
    
          }else if(otp.join("") !== "" && otpMassage=='کد تأیید موفق بود. حساب شما فعال شد.'){
            setOtpError("ورود با موفقیت انجام شد");
            setErrorColor(true);
            handleContinue();
    
          }else if(otp.join("") == ""){
            setErrorColor(false);
            setOtpError("لطفا کد را وارد کنید");
            handleContinue();
    
          } }
       }, [otp,isContinue]);

    useEffect(() => {
        if (isOTP && errorColor) {
          const timer = setTimeout(() => {
            handleCloseModal();
          }, 1500);
          return () => clearTimeout(timer);
        }
      }, [isOTP,errorColor]);


      const handleContinue=()=>{
        setIsContinue(!isContinue);
        VerifyUser();
    }


    const RegisterUser = async()=>{

      try{
         const response = await axios.post(
        "https://safarico.liara.run/api/register",
        {
          phone:mobile,
        }
      );
      const m=response.data;
      console.log(response.data);
      //alert(m['message']);
      console.log(m['password_set']);
      setisUserWithPass(m['password_set']);
  
      }catch(error){
        if (error.response && error.response.status === 500){
          console.log("مشکل در ارسال پیامک وجود دارد.");
         
      }
      }
     
    }

    const handleResendCode=()=>{
      setSeconds(120);
      RegisterUser();
  }


    return(<>

        <div>
                <div className="flex flex-col items-center mb-8 mt-7">
                <p className={`text-sm  ${errorColor ? 'text-green-500 ' : 'text-red-500' } `}>{otpError}</p>
                    <span className=" text-xl font-semibold text-gray-700 mt-5">کـد تاییــد</span>
                </div>

                <div className="flex flex-col items-center ">
                <span className=" text-sm text-gray-700 mb-8">
                            کد ارسال شده به شماره {mobile} را وارد کنید
                            </span>
                    <OtpInput numberOfDigits={numberOfDigits} isContinue={isContinue}
                            handleContinue={handleContinue} 
                            setOtpError={setOtpError}  setErrorColor={setErrorColor} otp={otp} setOtp={setOtp}></OtpInput>                    
                </div>

                <div className="flex md:justify-start justify-center md:mr-20 mt-2">
                    <svg className="w-4 h-4 text-secondary-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                        <span className=" text-xs text-gray-700 mr-1"><CountdownTimer seconds={seconds} setSeconds={setSeconds}/> دقیقه تا دریافت مجدد کد </span>
                </div>

                <div className="flex flex-col justify-center items-center mt-8 " >
                {seconds==0?(<span onClick={handleResendCode} className=" text-sm text-gray-700 mr-1 cursor-pointer">دریافت مجدد کد</span>):(<span className=" text-xs text-gray-700 mr-1"></span>)}
                {(isUserWithPass==1)?(<span onClick={handleEnterPassword}  className=" text-xs text-accent-300 mr-1 mt-5 cursor-pointer">ورود با رمز عبور</span>):(<span className=" text-xs text-gray-700 mr-1"></span>)}
                </div>
                <div className="flex flex-col items-center">
                        <button
                        onClick={handleContinue}
                        className="bg-secondary-400 text-gray-700 p-2 w-full rounded mt-10"
                        >
                        ادامه
                        </button>
                </div>
                
        </div>
    
    </>)
}
export default EnterOTP;