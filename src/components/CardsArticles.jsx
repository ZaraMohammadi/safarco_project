const CardsArticles = ()=>{
    return(<>
                <div className="sm:col-start-1 sm:col-end-13 col-start-1 col-end-7 mb-36">
                    <div className="text-2xl font-semibold mb-8">مقالات منتخب</div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-16  mb-8">
                       
                        <div className="flex sm:w-1/3 w-4/5 relative">
                            <img className=" rounded-lg  object-cover" src="\images\card2.jfif" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between rounded-md p-4">
                                <div className="flex justify-end"><button className="bg-secondary-300 p-1 text-sm rounded-md">غذاها</button></div>
                                <div className="flex text-white items-center justify-between">
                                    <span>خوشمزه ترین غذاهای شمال ایران</span>
                                    <span className="text-xs  underline underline-offset-4 ">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:w-1/3 w-4/5 relative">
                            <img className=" rounded-lg  object-cover" src="\images\card1.png" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between rounded-md p-4">
                                <div className="flex justify-end"><button className="bg-secondary-300 p-1 text-sm rounded-md">گردشگری</button></div>
                                <div className="flex text-white items-center justify-between">
                                    <span>اردیبهشت ماه کجا بریم؟</span>
                                    <span className="text-xs  underline underline-offset-4 ">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center sm:items-stretch gap-12">
                        <div className="flex sm:w-1/4 w-4/5 relative">
                            <img className=" rounded-lg  object-cover" src="\images\card5.jfif" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between rounded-md p-4">
                                <div className="flex justify-end"><button className="bg-secondary-300 p-1 text-sm rounded-md">فرهنگی</button></div>
                                <div className="flex text-white items-center justify-between">
                                    <span>آرامگاه فردوسی (همه آنچه باید پیش از بازدید بدانید)</span>
                                    <span className="text-xs  underline underline-offset-4 ">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:w-1/4 w-4/5 relative">
                            <img className=" rounded-lg  object-cover" src="\images\card4.jfif" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between rounded-md p-4">
                                <div className="flex justify-end"><button className="bg-secondary-300 p-1 text-sm rounded-md">تفریحی</button></div>
                                <div className="flex text-white items-center justify-between">
                                    <span>عجیب ترین مناطق تفریحی ایران</span>
                                    <span className="text-xs  underline underline-offset-4 ">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex sm:w-1/4 w-4/5 relative">
                            <img className=" rounded-lg  object-cover" src="\images\card3.jfif" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between rounded-md p-4">
                                <div className="flex justify-end"><button className="bg-secondary-300 p-1 text-sm rounded-md">مشاهیر</button></div>
                                <div className="flex text-white items-center justify-between">
                                    <span> زندگینامه مریم میرزخانی، نابغه ریاضی دنیا</span>
                                    <span className="text-xs  underline underline-offset-4 ">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>)
}
export default CardsArticles;