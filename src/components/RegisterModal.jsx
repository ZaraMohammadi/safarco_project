import axios from 'axios';
import { useState } from 'react';

 
const RegisterModal=({handleGoToOTP, mobile, setMobile,setisUserWithPass,seconds})=>{

  
 
  const [errorMessage, setErrorMessage] = useState('');
 

  const validateMobile = () => {

    if (isNaN(mobile)) {
      setErrorMessage('شماره را به صورت صحیح وارد کنید (فقط اعداد مجاز هستند)');
      return false;
    }

    //check length of input
    if (mobile.length !== 11) {
      setErrorMessage('طول شماره ورودی نادرست است');
      return false;
    }

    //check beggining whith 09
    if (!mobile.startsWith('09')) {
      setErrorMessage('شماره باید با 09 شروع شود');
      return false;
    }

    setErrorMessage('');
    return true;
  };

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

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateMobile() ) {
      //alert('شماره موبایل با موفقیت ثبت شد');
      RegisterUser();

      handleGoToOTP();
    }
  };

   
     return(<>
        <div>
                <div className="flex justify-center mb-12 mt-7">
                  <span className=" text-xl font-semibold text-gray-700">ورود | ثبت نام</span>
                </div>
                <div className="focus-input flex flex-col mb-7 ">
                  <form onSubmit={handleSubmit}>
                    <span className="text-naturalGray-200 text-xs">
                      لطفا شماره موبایل خود را وارد کنید
                    </span>
                    <input
                      type="text"
                      maxLength={11}
                      name="mobile"
                      id="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className={`border p-2 w-full ${errorMessage ? 'ring-red-500' : 'ring-gray-300' } text-sm text-black ring-1 ring-gray-300 focus:ring-accent-300 outline-none rounded p-2 w-full mt-3` }
                      placeholder="مثلا 09123456789"
                    />
                    {errorMessage && <p className="text-red-500 text-xs mt-2">{errorMessage}</p>}

                    <div className="flex flex-col items-center">
                      <button
                        type="submit"
                        className="bg-secondary-400 text-gray-700 p-2 w-full rounded mt-10"
                      >
                        ادامه
                      </button>
                    </div>
                  </form>
                </div>
       </div>
     </>)
   
}
export default RegisterModal;