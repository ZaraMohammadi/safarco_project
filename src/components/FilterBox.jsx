const FilterBox = ()=>{

    const handleSwitchClick = (e) => {
        e.currentTarget.classList.toggle('bg-naturalGray-300');
        e.currentTarget.classList.toggle('bg-secondary-400');
        e.currentTarget.firstChild.classList.toggle('translate-x-5');
      };

    return(<>
                <div className='sm:col-start-1 sm:col-end-13 col-start-1 col-end-7 text-sm bg-primary-500 rounded-md p-10 mb-24'>
                   <div className="sm:grid sm:grid-cols-2 sm:grid-flow-col  ">
                        <div className="flex justify-center items-center sm:row-span-12 mb-8 "><img src="\images\map-iran.png" className="w-4/5 h-4/5"></img></div>
                        <div className="text-white text-2xl sm:col-start-2 sm:col-end-1  mb-12">دیـــدنـی هــای ایـــــران را کـشف کـــن!</div>
                        <div className="flex items-center sm:w-4/5 bg-white text-xl sm:col-start-2 sm:col-end-1 sm:row-start-2 rounded-md p-3 border-1 border-secondary-400 mb-12"><input type="text" placeholder="هرجا رو میخوای جستجو کن" className="text-naturalGray-200 border-none outline-none w-2/3" /><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 17 18" fill="none">
                                <path d="M8.14323 15.9062C4.14115 15.9062 0.882812 12.6479 0.882812 8.64579C0.882812 4.64371 4.14115 1.38538 8.14323 1.38538C12.1453 1.38538 15.4036 4.64371 15.4036 8.64579C15.4036 12.6479 12.1453 15.9062 8.14323 15.9062ZM8.14323 2.44788C4.72198 2.44788 1.94531 5.23163 1.94531 8.64579C1.94531 12.06 4.72198 14.8437 8.14323 14.8437C11.5645 14.8437 14.3411 12.06 14.3411 8.64579C14.3411 5.23163 11.5645 2.44788 8.14323 2.44788Z" fill="#797979"/>
                                <path d="M15.5868 16.6146C15.4522 16.6146 15.3176 16.565 15.2114 16.4588L13.7947 15.0421C13.5893 14.8367 13.5893 14.4967 13.7947 14.2913C14.0001 14.0859 14.3401 14.0859 14.5455 14.2913L15.9622 15.7079C16.1676 15.9134 16.1676 16.2534 15.9622 16.4588C15.8559 16.565 15.7214 16.6146 15.5868 16.6146Z" fill="#797979"/>
                                </svg>
                        </div>
                        <div className=" text-white text-xl sm:col-start-2 sm:col-end-1  mb-12">
                            <div className="flex text-white text-xl mb-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M21.2206 18.24L20.2806 17.3C20.7706 16.56 21.0606 15.67 21.0606 14.71C21.0606 12.11 18.9506 10 16.3506 10C13.7506 10 11.6406 12.11 11.6406 14.71C11.6406 17.31 13.7506 19.42 16.3506 19.42C17.3106 19.42 18.1906 19.13 18.9406 18.64L19.8806 19.58C20.0706 19.77 20.3106 19.86 20.5606 19.86C20.8106 19.86 21.0506 19.77 21.2406 19.58C21.5906 19.22 21.5906 18.62 21.2206 18.24Z" fill="white"/>
                                <path d="M20.0819 4.02V6.24C20.0819 7.05 19.5819 8.06 19.0819 8.57L18.9019 8.73C18.7619 8.86 18.5519 8.89 18.3719 8.83C18.1719 8.76 17.9719 8.71 17.7719 8.66C17.3319 8.55 16.8619 8.5 16.3819 8.5C12.9319 8.5 10.1319 11.3 10.1319 14.75C10.1319 15.89 10.4419 17.01 11.0319 17.97C11.5319 18.81 12.2319 19.51 12.9919 19.98C13.2219 20.13 13.3119 20.45 13.1119 20.63C13.0419 20.69 12.9719 20.74 12.9019 20.79L11.5019 21.7C10.2019 22.51 8.41187 21.6 8.41187 19.98V14.63C8.41187 13.92 8.01188 13.01 7.61188 12.51L3.82187 8.47C3.32187 7.96 2.92188 7.05 2.92188 6.45V4.12C2.92188 2.91 3.82187 2 4.91187 2H18.0919C19.1819 2 20.0819 2.91 20.0819 4.02Z" fill="white"/>
                                </svg>
                            فیلتر کردن مکان
                            </div>
                            <div className="text-white bg-primary-700 sm:w-2/3 rounded-md p-5">
                                <div className="text-sm mb-10 font-semibold">نوع جاذبه</div>
                                <div className="flex sm:gap-12 gap-2 mb-8">
                                    <div className="flex gap-2 items-center text-white text-sm">طبــــیعـــــی
                                        <div
                                            className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                            onClick={handleSwitchClick}
                                            >
                                            <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                            </div>
                                    </div>
                                    <div className="flex gap-2 items-center text-white text-sm">تــاریخی 
                                        <div
                                            className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                            onClick={handleSwitchClick}
                                            >
                                            <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                            </div>
                                    </div>
                                    
                                </div>
                                <div className="flex lg:gap-12 gap-2 items-start mb-4">
                                    <div className="flex md:flex-row flex-col sm:gap-12 gap-6">
                                        <div className="flex gap-2 items-center text-white text-sm">گردشگری
                                            <div
                                                    className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                                    onClick={handleSwitchClick}
                                                    >
                                                    <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center text-white text-sm">مــذهبی
                                            <div
                                                className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                                onClick={handleSwitchClick}
                                                >
                                                <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center text-white text-sm">فرهنگی
                                        <div
                                            className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                            onClick={handleSwitchClick}
                                            >
                                            <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end   ">
                                <span className="flex justify-center items-center text-black text-sm bg-secondary-400 sm:w-1/4 p-2 rounded-3xl"> اعمال فیلتر</span>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-start-2 sm:col-end-1  text-white mb-4"> اگر تو هم مکان خاصی رو میشناسی حتما به ما معرفی کن :)</div>
                        <div className="flex sm:col-start-2 sm:col-end-1  ">
                             <button className="flex items-center justify-center gap-1 sm:w-1/5 p-2 rounded-md text-black bg-naturalGray-300"> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                                <path d="M12.525 5.07496C11.9183 2.37413 9.56168 1.16663 7.49668 1.16663C7.49668 1.16663 7.49668 1.16663 7.49085 1.16663C5.43168 1.16663 3.08085 2.37413 2.46835 5.06913C1.78001 8.07913 3.62335 10.6283 5.29168 12.2383C5.91001 12.8333 6.70335 13.1308 7.49668 13.1308C8.29001 13.1308 9.08335 12.8333 9.69585 12.2383C11.3642 10.6283 13.2075 8.08496 12.525 5.07496ZM9.10085 6.85413H7.93418V8.02079C7.93418 8.25996 7.73585 8.45829 7.49668 8.45829C7.25751 8.45829 7.05918 8.25996 7.05918 8.02079V6.85413H5.89251C5.65335 6.85413 5.45501 6.65579 5.45501 6.41663C5.45501 6.17746 5.65335 5.97913 5.89251 5.97913H7.05918V4.81246C7.05918 4.57329 7.25751 4.37496 7.49668 4.37496C7.73585 4.37496 7.93418 4.57329 7.93418 4.81246V5.97913H9.10085C9.34001 5.97913 9.53835 6.17746 9.53835 6.41663C9.53835 6.65579 9.34001 6.85413 9.10085 6.85413Z" fill="#131313"/>
                                </svg>
                            افزودن مکان</button>  
                        </div>
                    </div>
                </div>
    
            </>)
}

export default FilterBox;