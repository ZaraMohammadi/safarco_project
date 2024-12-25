import React, { useState } from 'react';

import {
  Modal,
  ModalContent,
  ModalBody,
} from "@nextui-org/react";

import RegisterModal from "./RegisterModal";
import EnterOTP from './EnterOTP';
import EnterPassword from './EnterPassword';
import ForgetPassword from './ForgetPassword';

export default function ModalBox({ open, handleCloseModal }) {

 
  const [mobile, setMobile] = useState('');
  
  const [isRegister,setIsRegister]=useState(true);

  const [isOTP,setIsOTP]=useState(false);

  const [isEnterPassword,setIsEnterPassword]=useState(false);

  const [isForgetPassword, setIsForgetPassword]=useState(false);

  const [isUserWithPass,setisUserWithPass] = useState(0);

  const [seconds, setSeconds] = useState(120);

 

 const handleClose = () => {
   //setOpen(false);
   handleCloseModal();
   setIsRegister(true);
   setIsOTP(false);
   setIsEnterPassword(false);
   setIsForgetPassword(false);
  
  };

  const handleGoToOTP=()=>{
    setIsRegister(false);
    setIsEnterPassword(false);
    setIsForgetPassword(false);
    setIsOTP(true);
  }


  const handleEnterPassword = ()=>{
    setIsOTP(false);
    setIsForgetPassword(false);
    setIsEnterPassword(true);
  }
 
  const handleForgetPassword = ()=>{
    setIsForgetPassword(true);
    setIsRegister(false);
    setIsOTP(false);
    setIsEnterPassword(false);
  
  }
  
  return (
    <>
      <Modal
        backdrop="blur"
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
        }}
      >
        <ModalContent
          className="
          w-2/3 max-w-lg 
          sm:max-w-md 
           rounded-lg
          top-20
        "
          style={{
            position: "fixed",
            height: "fit-content",
          }}
        >
          <ModalBody>
            <>
              {/* close button */}
              <div className="flex">
                <button onClick={handleClose}>
                  <svg
                    className="w-7 h-7 text-naturalGray-200 hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>

              {isRegister &&(<RegisterModal  handleGoToOTP={handleGoToOTP} mobile={mobile} setMobile={setMobile} setisUserWithPass={setisUserWithPass} seconds={seconds}></RegisterModal>)}
              
              {isOTP &&<EnterOTP mobile={mobile} isOTP={isOTP} handleCloseModal={handleCloseModal} handleEnterPassword={handleEnterPassword} isUserWithPass={isUserWithPass} setisUserWithPass={setisUserWithPass} seconds={seconds} setSeconds={setSeconds}></EnterOTP>}
              
              {isEnterPassword && <EnterPassword isEnterPassword={isEnterPassword} handleCloseModal={handleCloseModal} handleGoToOTP={handleGoToOTP} handleForgetPassword={handleForgetPassword} mobile={mobile} ></EnterPassword>}

              {isForgetPassword && <ForgetPassword></ForgetPassword>}
            
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
