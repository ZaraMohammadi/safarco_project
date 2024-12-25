import React, { useRef } from 'react';


const correctOTP = "1234" // validate from your server


const OtpInput=({ numberOfDigits,otp,setOtp, isContinue, handleContinue, setOtpError, setErrorColor})=> {


  
  
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {

    if (!/^\d*$/.test(value)) {
      return; // اگر ورودی عدد نبود، متوقف شود
    }

    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }


  return (
    <article dir='ltr' className="w-1/2">

     <div className='flex items-center justify-center gap-4'>
      {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={`text-center text-lg border-2 border-accent-300 w-8 h-8 md:w-12 md:h-12 text-gray-800 rounded-md block shadow-sm focus:shadow-gray-400 focus:shadow-md focus:outline-none appearance-none`}
        />
      ))}

     </div>

     {/* {(isContinue)?errorDisplay:errorDisplaynon} */}
     
    </article>
  );
}

export default OtpInput;