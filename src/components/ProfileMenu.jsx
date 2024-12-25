import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../contexts/profile-context";
import ExitModal from "./ExitModal";

const ProfileMenu = ()=>{

    //states & functions to handle Modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);


    const{userName}=useContext(ProfileContext)

    const [isHamberger,setIsHamberger]=useState(true);

    const handleProfileMenu = ()=>{
        setIsHamberger(!isHamberger);
    }


    return(<>
        <div className={`absolute sm:top-5 top-12 sm:right-0 bg-white p-3 rounded-md shadow-medium transition-all sm:h-96 sm:overflow-hidden w-2/3  duration-1000 ${isHamberger?' sm:w-16 ':'sm:w-1/6'}`}>
                        <button onClick={handleProfileMenu} className="mb-6 hidden sm:block">
                        {isHamberger?(<svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                <path d="M24.125 8.71875H3.875C3.41375 8.71875 3.03125 8.33625 3.03125 7.875C3.03125 7.41375 3.41375 7.03125 3.875 7.03125H24.125C24.5863 7.03125 24.9688 7.41375 24.9688 7.875C24.9688 8.33625 24.5863 8.71875 24.125 8.71875Z" fill="#353535"/>
                                <path d="M24.125 14.3438H3.875C3.41375 14.3438 3.03125 13.9612 3.03125 13.5C3.03125 13.0387 3.41375 12.6562 3.875 12.6562H24.125C24.5863 12.6562 24.9688 13.0387 24.9688 13.5C24.9688 13.9612 24.5863 14.3438 24.125 14.3438Z" fill="#353535"/>
                                <path d="M24.125 19.9688H3.875C3.41375 19.9688 3.03125 19.5862 3.03125 19.125C3.03125 18.6637 3.41375 18.2812 3.875 18.2812H24.125C24.5863 18.2812 24.9688 18.6637 24.9688 19.125C24.9688 19.5862 24.5863 19.9688 24.125 19.9688Z" fill="#353535"/>
                            </svg>)
                            :(<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                            <path d="M10.3175 17.5275C10.1037 17.5275 9.89 17.4488 9.72125 17.28C9.395 16.9538 9.395 16.4138 9.72125 16.0875L16.0887 9.72003C16.415 9.39378 16.955 9.39378 17.2812 9.72003C17.6075 10.0463 17.6075 10.5863 17.2812 10.9125L10.9137 17.28C10.7562 17.4488 10.5312 17.5275 10.3175 17.5275Z" fill="#353535"/>
                            <path d="M16.685 17.5275C16.4712 17.5275 16.2575 17.4488 16.0887 17.28L9.72125 10.9125C9.395 10.5863 9.395 10.0463 9.72125 9.72003C10.0475 9.39378 10.5875 9.39378 10.9137 9.72003L17.2812 16.0875C17.6075 16.4138 17.6075 16.9538 17.2812 17.28C17.1125 17.4488 16.8987 17.5275 16.685 17.5275Z" fill="#353535"/>
                            <path d="M16.875 25.5938H10.125C4.01625 25.5938 1.40625 22.9837 1.40625 16.875V10.125C1.40625 4.01625 4.01625 1.40625 10.125 1.40625H16.875C22.9837 1.40625 25.5938 4.01625 25.5938 10.125V16.875C25.5938 22.9837 22.9837 25.5938 16.875 25.5938ZM10.125 3.09375C4.93875 3.09375 3.09375 4.93875 3.09375 10.125V16.875C3.09375 22.0613 4.93875 23.9062 10.125 23.9062H16.875C22.0613 23.9062 23.9062 22.0613 23.9062 16.875V10.125C23.9062 4.93875 22.0613 3.09375 16.875 3.09375H10.125Z" fill="#353535"/>
                            </svg>)}    
                        </button>
                        <div className="sm:flex flex-col items-center justify-center mb-3 hidden ">
                        <div className={`border border-white transition-all duration-1000 ${isHamberger?'w-10 h-10':'w-14 h-14 mb-2 '}  rounded-full overflow-hidden`}><img className="object-cover" src=".\images\user-image.png" alt="" /></div>
                        <span className={`text-sm transition-all duration-300 delay-500 overflow-hidden ${isHamberger ? "opacity-0 w-0 h-0" : "opacity-100 w-auto h-auto"} relative`}>{userName}</span>
                        </div>
                        <hr className="text-black bg-black mb-4 hidden sm:block" />
                        
                        <div>
                            <ul className="flex sm:flex-col flex-row justify-between sm:justify-normal gap-2 text-sm">
                               <Link to="."> <li className="flex  items-center cursor-pointer group hover:bg-accent-200 text-naturalGray-200 hover:text-black transition duration-200 rounded-md p-2">
                                    <svg className="text-naturalGray-200 group-hover:text-accent-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="currentColor"/>
                                        <path d="M12 6.92999C9.93 6.92999 8.25 8.60999 8.25 10.68C8.25 12.71 9.84 14.36 11.95 14.42C11.98 14.42 12.02 14.42 12.04 14.42C12.06 14.42 12.09 14.42 12.11 14.42C12.12 14.42 12.13 14.42 12.13 14.42C14.15 14.35 15.74 12.71 15.75 10.68C15.75 8.60999 14.07 6.92999 12 6.92999Z" fill="currentColor"/>
                                    </svg>
                                    <span  className={`hidden sm:block transition-all duration-300 delay-500 overflow-hidden ${isHamberger ? "opacity-0 w-0 h-0" : "opacity-100 w-auto h-auto mr-3"} relative`}>ویرایش پروفایل</span>  
                                </li></Link>

                               <Link to="./notifications"> <li className="flex  items-center cursor-pointer group hover:bg-accent-200 text-naturalGray-200 hover:text-black transition duration-200 rounded-md p-2">
                                    <svg className="text-naturalGray-200 group-hover:text-accent-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.0199 20.53C9.68987 20.53 7.35987 20.16 5.14987 19.42C4.30987 19.13 3.66987 18.54 3.38987 17.77C3.09987 17 3.19987 16.15 3.65987 15.39L4.80987 13.48C5.04987 13.08 5.26987 12.28 5.26987 11.81V8.91998C5.26987 5.19998 8.29987 2.16998 12.0199 2.16998C15.7399 2.16998 18.7699 5.19998 18.7699 8.91998V11.81C18.7699 12.27 18.9899 13.08 19.2299 13.49L20.3699 15.39C20.7999 16.11 20.8799 16.98 20.5899 17.77C20.2999 18.56 19.6699 19.16 18.8799 19.42C16.6799 20.16 14.3499 20.53 12.0199 20.53ZM12.0199 3.66998C9.12987 3.66998 6.76987 6.01998 6.76987 8.91998V11.81C6.76987 12.54 6.46987 13.62 6.09987 14.25L4.94987 16.16C4.72987 16.53 4.66987 16.92 4.79987 17.25C4.91987 17.59 5.21987 17.85 5.62987 17.99C9.80987 19.39 14.2399 19.39 18.4199 17.99C18.7799 17.87 19.0599 17.6 19.1899 17.24C19.3199 16.88 19.2899 16.49 19.0899 16.16L17.9399 14.25C17.5599 13.6 17.2699 12.53 17.2699 11.8V8.91998C17.2699 6.01998 14.9199 3.66998 12.0199 3.66998Z" fill="currentColor"/>
                                        <path d="M13.8806 3.93999C13.8106 3.93999 13.7406 3.92999 13.6706 3.90999C13.3806 3.82999 13.1006 3.76999 12.8306 3.72999C11.9806 3.61999 11.1606 3.67999 10.3906 3.90999C10.1106 3.99999 9.8106 3.90999 9.6206 3.69999C9.4306 3.48999 9.3706 3.18999 9.4806 2.91999C9.8906 1.86999 10.8906 1.17999 12.0306 1.17999C13.1706 1.17999 14.1706 1.85999 14.5806 2.91999C14.6806 3.18999 14.6306 3.48999 14.4406 3.69999C14.2906 3.85999 14.0806 3.93999 13.8806 3.93999Z" fill="currentColor"/>
                                        <path d="M12.0195 22.81C11.0295 22.81 10.0695 22.41 9.36953 21.71C8.66953 21.01 8.26953 20.05 8.26953 19.06H9.76953C9.76953 19.65 10.0095 20.23 10.4295 20.65C10.8495 21.07 11.4295 21.31 12.0195 21.31C13.2595 21.31 14.2695 20.3 14.2695 19.06H15.7695C15.7695 21.13 14.0895 22.81 12.0195 22.81Z" fill="currentColor"/>
                                    </svg>
                                    <span  className={`hidden sm:block transition-all duration-300 delay-500 overflow-hidden ${isHamberger ? "opacity-0 w-0 h-0" : "opacity-100 w-auto h-auto mr-3"} relative`}>اعلان ها</span>  
                                </li></Link>

                                <li className="flex  items-center cursor-pointer group hover:bg-accent-200 text-naturalGray-200 hover:text-black transition duration-200 rounded-md p-2">
                                    <svg className="text-naturalGray-200 group-hover:text-accent-300" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="currentColor">
                                        <path d="M17 21.25H7C2.59 21.25 1.25 19.91 1.25 15.5V15C1.25 14.59 1.59 14.25 2 14.25C2.96 14.25 3.75 13.46 3.75 12.5C3.75 11.54 2.96 10.75 2 10.75C1.59 10.75 1.25 10.41 1.25 10V9.5C1.25 5.09 2.59 3.75 7 3.75H17C21.41 3.75 22.75 5.09 22.75 9.5V10.5C22.75 10.91 22.41 11.25 22 11.25C21.04 11.25 20.25 12.04 20.25 13C20.25 13.96 21.04 14.75 22 14.75C22.41 14.75 22.75 15.09 22.75 15.5C22.75 19.91 21.41 21.25 17 21.25ZM2.75 15.66C2.77 19.1 3.48 19.75 7 19.75H17C20.34 19.75 21.15 19.16 21.24 16.16C19.81 15.82 18.75 14.53 18.75 13C18.75 11.47 19.82 10.18 21.25 9.84V9.5C21.25 5.93 20.58 5.25 17 5.25H7C3.48 5.25 2.77 5.9 2.75 9.34C4.18 9.68 5.25 10.97 5.25 12.5C5.25 14.03 4.18 15.32 2.75 15.66Z" fill="currentColor"/>
                                        <path d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V4.5C9.25 4.09 9.59 3.75 10 3.75C10.41 3.75 10.75 4.09 10.75 4.5V7C10.75 7.41 10.41 7.75 10 7.75Z" fill="currentColor"/>
                                        <path d="M10 15.08C9.59 15.08 9.25 14.74 9.25 14.33V10.66C9.25 10.25 9.59 9.91003 10 9.91003C10.41 9.91003 10.75 10.25 10.75 10.66V14.33C10.75 14.75 10.41 15.08 10 15.08Z" fill="currentColor"/>
                                        <path d="M10 21.25C9.59 21.25 9.25 20.91 9.25 20.5V18C9.25 17.59 9.59 17.25 10 17.25C10.41 17.25 10.75 17.59 10.75 18V20.5C10.75 20.91 10.41 21.25 10 21.25Z" fill="currentColor"/>
                                    </svg>
                                    <span  className={`hidden sm:block transition-all duration-300 delay-500 overflow-hidden ${isHamberger ? "opacity-0 w-0 h-0" : "opacity-100 w-auto h-auto mr-3"} relative`}>تیکت ها</span>  
                                </li>

                                <li onClick={handleOpen} className="flex items-center cursor-pointer group hover:bg-accent-200 text-naturalGray-200 hover:text-black transition duration-200 rounded-md p-2">
                                    <svg className="text-naturalGray-200 group-hover:text-accent-300" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="currentColor">
                                        <path d="M15.2405 22.77H15.1105C10.6705 22.77 8.5305 21.02 8.1605 17.1C8.1205 16.69 8.4205 16.32 8.8405 16.28C9.2405 16.24 9.6205 16.55 9.6605 16.96C9.9505 20.1 11.4305 21.27 15.1205 21.27H15.2505C19.3205 21.27 20.7605 19.83 20.7605 15.76V9.23998C20.7605 5.16998 19.3205 3.72998 15.2505 3.72998H15.1205C11.4105 3.72998 9.9305 4.91998 9.6605 8.11998C9.6105 8.52998 9.2605 8.83998 8.8405 8.79998C8.4205 8.76998 8.1205 8.39998 8.1505 7.98998C8.4905 4.00998 10.6405 2.22998 15.1105 2.22998H15.2405C20.1505 2.22998 22.2505 4.32998 22.2505 9.23998V15.76C22.2505 20.67 20.1505 22.77 15.2405 22.77Z" fill="currentColor"/>
                                        <path d="M15.0011 13.25H3.62109C3.21109 13.25 2.87109 12.91 2.87109 12.5C2.87109 12.09 3.21109 11.75 3.62109 11.75H15.0011C15.4111 11.75 15.7511 12.09 15.7511 12.5C15.7511 12.91 15.4111 13.25 15.0011 13.25Z" fill="currentColor"/>
                                        <path d="M5.85141 16.6C5.66141 16.6 5.47141 16.53 5.32141 16.38L1.97141 13.03C1.68141 12.74 1.68141 12.26 1.97141 11.97L5.32141 8.61997C5.61141 8.32997 6.09141 8.32997 6.38141 8.61997C6.67141 8.90997 6.67141 9.38997 6.38141 9.67997L3.56141 12.5L6.38141 15.32C6.67141 15.61 6.67141 16.09 6.38141 16.38C6.24141 16.53 6.04141 16.6 5.85141 16.6Z" fill="currentColor"/>
                                    </svg>
                                    <span  className={`hidden sm:block transition-all duration-300 delay-500 overflow-hidden ${isHamberger ? "opacity-0 w-0 h-0" : "opacity-100 w-auto h-auto mr-3"} relative`}>خروج از حساب کاربری</span>  
                                </li>
                                <ExitModal handleCloseModal={handleCloseModal} open={open}/>
                            </ul>
                        </div>
        </div>
            </>)
}
export default ProfileMenu;