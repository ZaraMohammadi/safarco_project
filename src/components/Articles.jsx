import CardsArticles from "./CardsArticles";
import NewArticles from "./NewArticles";
import { ArticleProvider } from "../contexts/article-context";

const Articles = ()=>{

    const handleSwitchClick = (e) => {
        e.currentTarget.classList.toggle('bg-naturalGray-300');
        e.currentTarget.classList.toggle('bg-secondary-400');
        e.currentTarget.firstChild.classList.toggle('translate-x-5');
      };

    return(<>
        <ArticleProvider>
            <div className="col-start-1 sm:col-end-13 col-end-7 ">
                <div className=" flex flex-col md:flex-row gap-5 md:gap-0 md:items-center md:justify-between mb-16">
                    <div className="flex justify-between items-center border border-secondary-400 p-3 rounded-md w-full md:w-1/3">
                        <input className="outline-none" placeholder="جستجو در مقالات..." type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M8.14714 15.9063C4.14505 15.9063 0.886719 12.6479 0.886719 8.64585C0.886719 4.64377 4.14505 1.38544 8.14714 1.38544C12.1492 1.38544 15.4076 4.64377 15.4076 8.64585C15.4076 12.6479 12.1492 15.9063 8.14714 15.9063ZM8.14714 2.44794C4.72589 2.44794 1.94922 5.23169 1.94922 8.64585C1.94922 12.06 4.72589 14.8438 8.14714 14.8438C11.5684 14.8438 14.3451 12.06 14.3451 8.64585C14.3451 5.23169 11.5684 2.44794 8.14714 2.44794Z" fill="#797979"/>
                            <path d="M15.5829 16.6146C15.4483 16.6146 15.3137 16.565 15.2074 16.4588L13.7908 15.0421C13.5854 14.8367 13.5854 14.4967 13.7908 14.2913C13.9962 14.0859 14.3362 14.0859 14.5416 14.2913L15.9583 15.7079C16.1637 15.9134 16.1637 16.2534 15.9583 16.4588C15.852 16.565 15.7174 16.6146 15.5829 16.6146Z" fill="#797979"/>
                        </svg>
                    </div>
                    <div className="flex flex-col gap-8 bg-primary-600 rounded-md p-4 text-white w-full md:w-1/2">
                        <span className="text-lg">فیلتر کردن مقالات</span>
                        <span className="text-xs">میتونی چند تا گزینه رو با هم انتخاب کنی و فیلتر رو اعمال کنی</span>
                        <div className="flex flex-col gap-6 md:flex-row ">
                            <div className="flex gap-3 justify-around">
                                <div className="flex gap-2 items-center text-white text-sm">گردشگری 
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
                                <div className="flex gap-2 items-center text-white text-sm">تفریحی 
                                    <div
                                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                        onClick={handleSwitchClick}
                                        >
                                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                        </div>
                                </div>
                            </div>
                            <div className="flex gap-3 justify-around">
                                <div className="flex gap-2 items-center text-white text-sm">مشاهیر 
                                    <div
                                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                        onClick={handleSwitchClick}
                                        >
                                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
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
                                <div className="flex gap-2 items-center text-white text-sm">مذهبی 
                                    <div
                                    className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                    onClick={handleSwitchClick}
                                    >
                                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                        </div>
                                    </div>
                                </ div>
                            
                        </div>
                        
                        <div className="flex flex-col gap-6 md:flex-row ">
                            <div className="flex md:flex-row-reverse flex-row gap-3 justify-around">
                                <div className="flex gap-2 items-center text-white text-sm">غذاها و خوراکی ها 
                                    <div
                                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                        onClick={handleSwitchClick}
                                        >
                                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                        </div>
                                </div>
                                <div className="flex gap-2 items-center text-white text-sm">اخبار گردشگری 
                                    <div
                                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                                        onClick={handleSwitchClick}
                                        >
                                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                                        </div>
                                </div>
                                
                            </div>                      
                        </div>
                        <div className="flex justify-end   ">
                            <span className="flex justify-center items-center text-black text-sm bg-secondary-400  p-2 rounded-md"> اعمال فیلتر</span>
                        </div>
                    </div>
                </div>
                <CardsArticles/>

                <NewArticles/>
            </div>
            
        </ArticleProvider>
    </>)
}
export default Articles;