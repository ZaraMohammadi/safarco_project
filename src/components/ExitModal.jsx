import {
    Modal,
    ModalContent,
    ModalBody,
  } from "@nextui-org/react";


const ExitModal = ({open,handleCloseModal})=>{
    return(<>
     <Modal
        backdrop="blur"
        isOpen={open}
        onClose={handleCloseModal}
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
          flex
          jusstify-center *:items-center
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
             
              <img className="w-1/2 h-2/3 my-8" src=".\images\sad.svg" alt="" />
              <div className="flex justify-center items-center text-black text-2xl text-center mb-10"><span>واقعا از حساب کاربری خودت میخوای خارج بشی؟</span></div>
              <div className="flex w-full justify-around ">
                  <button onClick={handleCloseModal} className="rounded-md p-3 items-center justify-center text-black bg-secondary-400 w-1/3">خیر</button>
                  <button className="rounded-md p-3 items-center justify-center text-black border-2 w-1/3">بله</button>
              </div>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>)
}
export default ExitModal;