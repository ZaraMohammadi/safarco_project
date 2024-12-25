/*import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import RegisterModal from './RegisterModal';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '70%',   // عرض برای موبایل
      sm: '50%',   // عرض برای تبلت و بالاتر
      md: '25%',   // عرض برای دسکتاپ
    },
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 10,
    px: 3,
    py: 3,
  };

*/
/*export default function ModalBox({open,handleClose}) {

  

  return (
    <div>
       
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className='flex'>
              <button  onClick={handleClose}>
                <svg className="w-7 h-7 text-naturalGray-200 hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              </button>
            </div>
           <RegisterModal/>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}*/

import {Button, ButtonGroup} from "@nextui-org/button";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/input";

export default function ModalBox({open, handleClose}) {
  //const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const handleSubmit=()=>{

  }

  return (
    <>
      
      <Modal  backdrop="blur"
       isOpen={open}
       onClose={handleClose}
       hideCloseButton={true}
       classNames={{
        base: "border-[#292f46] w-2/5 py-3  rounded-lg shadow-lg  text-naturalGray-200",
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
       
        <ModalContent 
          className="
          w-2/3 max-w-lg // محدودیت عرض مدال
          sm:max-w-md   // برای موبایل عرض مدال کمتر می‌شود
           rounded-lg
          top-20
        "
        style={{
          position: "fixed",
        
           // این دستور مدال را در مرکز صفحه قرار می‌دهد
          height: "fit-content",  // ارتفاع مدال را متناسب با محتوا تنظیم می‌کند
        }}>
          <ModalBody>
            <>
            <div className='flex'>
              <button onClick={handleClose}>
                <svg className="w-7 h-7 text-naturalGray-200 hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              </button>
            </div>
            <div>

<div className='flex justify-center mb-12 mt-7'>
<span className=' text-xl font-semibold'>ورود | ثبت نام</span>
</div>
{/* <div className='focus-input flex flex-col mb-7 '>
  <label className='mb-3 text-naturalGray-200' htmlFor="name">نام و نام خانوادگی</label>
  <input type="text" name='name' id='name' className='text-sm ring-1 ring-naturalGray-200 focus:ring-accent-300 outline-none rounded p-2 w-full'
    placeholder='علی محمدی'/>
</div> */}

<div className='focus-input flex flex-col mb-7 '>

  {/* <label className='mb-3 text-naturalGray-200' htmlFor="mobile">شماره موبایل</label> */}
  
  <span className='text-naturalGray-200 text-xs mb-3'>لطفا شماره موبایل خود را وارد کنید</span>
  <input type="text" maxLength={11} name='mobile' id='mobile' className='text-sm text-black ring-1 ring-gray-300 focus:ring-accent-300 outline-none rounded p-2 w-full'
    placeholder="مثلا 09123456789"/>
    <span className='text-red-500 text-xs mt-3 hidden'>لطفا این قسمت را خالی نگذارید</span>

    <div className='flex flex-col items-center'>
<button onClick={handleSubmit()} className='bg-secondary-400 p-2 w-2/5 rounded mb-4'>ادامه</button>
{/* <span className='text-xs'>قبلا ثبت نام کرده اید؟</span>
<span className='text-xs underline underline-offset-4 cursor-pointer'>ورود</span> */}
</div>
     {/* <Input
      type="text"
      name='mobile' id='mobile'
      maxLength={11}
      placeholder="مثلا 09123456789"
      isInvalid={false}
      errorMessage="لطفا این قسمت را خالی نگذارید"
     
      classNames={{
        input: [
          "text-black/90 ",
          "placeholder:text-naturalGray-200",
        ],
         inputWrapper: [
          "text-sm",
          "ring-1", // ضخامت رینگ 1 پیکسل
          "ring-gray-300", // رنگ رینگ در حالت عادی خاکستری
          "outline-none", // حذف outline پیش‌فرض
          "rounded", // گوشه‌های گرد
          "p-2", // پدینگ
          "w-full", // عرض 100%
          "focus:outline-none", // حذف outline پیش‌فرض
          "focus:ring-2", // ضخامت بیشتر رینگ هنگام فوکوس
          "focus:ring-blue-500", // رنگ آبی هنگام فوکوس
      ]}}
    /> */}
    
</div>

{/* <div className='focus-input flex flex-col mb-12'>
  <label className='mb-3 text-naturalGray-200' htmlFor="pass">رمز عبور</label>

  <div className='flex p-2 mb-2 ring-1 ring-naturalGray-200 focus-within:ring-accent-300 outline-none rounded'>
  
  <input type={isHide?"password":"text"} name='pass' id='pass' className='text-sm  outline-none w-full'
    placeholder='رمز عبور جدید ایجاد کنید'
    />
    <button onClick={handleHide}>
   {
     isHide?(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
   </svg>
   ):(<svg className="w-6 h-6 text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
   <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
   <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
 </svg>
 )

   }</button>

    </div>
    <span className='text-naturalGray-200 text-xs'>رمز عبور باید شامل 8 کاراکتر و شامل حروف،اعداد و نمادها باشد.</span>
</div> */}


</div>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}