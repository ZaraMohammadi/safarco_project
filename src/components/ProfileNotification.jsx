import {Accordion, AccordionItem} from "@nextui-org/react";
import { useState } from "react";

const ProfileNotification = () =>{

    const handleSwitchClick = (e) => {
        e.currentTarget.classList.toggle('bg-naturalGray-300');
        e.currentTarget.classList.toggle('bg-primary-500');
        e.currentTarget.firstChild.classList.toggle('translate-x-5');
        e.currentTarget.firstChild.classList.toggle('bg-primary-600')
      };
   

      const [accordionItems, setAccordionItems] = useState([
        { text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف .", isRead: false },
        { text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف .", isRead: false },
        { text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف .", isRead: false },
        { text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف .", isRead: true },
        { text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ُلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف .", isRead: true },
        
      ]);

      const getPreviewText = (text) => {
        const trimmedText = text.slice(0, 50);
        const lastSpaceIndex = trimmedText.lastIndexOf(" ");
        return lastSpaceIndex > 0 ? trimmedText.slice(0, lastSpaceIndex) + "..." : trimmedText + "...";
      };

      const handleToggleReadStatus = (index) => {
        setAccordionItems((prevItems) =>
          prevItems.map((item, i) =>
            i === index ? { ...item, isRead: true } : item
          )
        );
      };




    return(<>
    <div className=" bg-accent-200 p-8 px-10 pt-36 sm:pt-8 rounded-lg mb-20">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-between  w-full mb-8 border-b-2 border-naturalGray-200 pb-10">
            <div className="flex flex-col gap-6">
                <span className="text-2xl font-semibold">اعلان های من</span>
                <span className="text-sm">اعلان های شما تا ۳۰ روز نگه داری و بعد از آن خودکار 
                        حذف خواهد شد.
                </span>
            </div>
            <div className="flex gap-12">
                <div className="flex gap-2 items-center text-sm">فقط خوانده نشده ها
                    <div
                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                        onClick={handleSwitchClick}
                        >
                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                    </div>
                </div>
                <div className="flex gap-2 items-center text-sm">فقط خوانده شده ها
                    <div
                        className="w-10 h-4 flex items-center justify-end  bg-naturalGray-300  rounded-full p-1 cursor-pointer transition duration-300 ease-in-out"
                        onClick={handleSwitchClick}
                        >
                        <div className="bg-black w-3 h-3 rounded-full shadow-md transform transition duration-300 ease-in-out"></div>
                    </div>
                </div>

            </div>
        </div>
        
        <Accordion variant="splitted">
            {accordionItems.map((item, index) => (
                <AccordionItem
                key={index}
                className="bg-accent-300 text-white rounded-md p-1 text-sm mb-4" 
                title={
                    <div className="flex items-center justify-between">
                            <p className="text-white text-sm text-justify px-10">
                            {getPreviewText(item.text)}
                        </p>
                        <span className="mr-2">
                            {item.isRead ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M21.8 12.23H18.32C17.34 12.23 16.47 12.77 16.03 13.65L15.19 15.31C14.99 15.71 14.59 15.96 14.15 15.96H10.87C10.56 15.96 10.12 15.89 9.83 15.31L8.99 13.66C8.55 12.79 7.67 12.24 6.7 12.24H3.2C2.81 12.24 2.5 12.55 2.5 12.94V16.2C2.5 19.83 4.68 22 8.32 22H16.7C20.13 22 22.24 20.12 22.5 16.78V12.93C22.5 12.55 22.19 12.23 21.8 12.23Z" fill="#9DDAF9"/>
                                <path d="M22.5 7.81006V10.8501C22.28 10.7701 22.04 10.7301 21.8 10.7301H18.32C16.77 10.7301 15.38 11.5901 14.69 12.9701L13.94 14.4501H11.08L10.33 12.9801C9.64 11.5901 8.25 10.7301 6.7 10.7301H3.2C2.96 10.7301 2.72 10.7701 2.5 10.8501V7.81006C2.5 4.17006 4.67 2.00006 8.31 2.00006H16.69C20.33 2.00006 22.5 4.17006 22.5 7.81006Z" fill="#9DDAF9"/>
                                </svg> 
                                : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M20 8C21.3807 8 22.5 6.88071 22.5 5.5C22.5 4.11929 21.3807 3 20 3C18.6193 3 17.5 4.11929 17.5 5.5C17.5 6.88071 18.6193 8 20 8Z" fill="#9DDAF9"/>
                                <path d="M20 8C21.3807 8 22.5 6.88071 22.5 5.5C22.5 4.11929 21.3807 3 20 3C18.6193 3 17.5 4.11929 17.5 5.5C17.5 6.88071 18.6193 8 20 8Z" fill="#FF0000"/>
                                <path d="M21.22 9.31C20.52 9.53 19.75 9.57 18.95 9.37C17.61 9.02 16.52 7.95 16.15 6.61C15.97 5.96 15.96 5.32 16.07 4.74C16.2 4.1 15.75 3.5 15.11 3.5H7.5C4.5 3.5 2.5 5 2.5 8.5V15.5C2.5 19 4.5 20.5 7.5 20.5H17.5C20.5 20.5 22.5 19 22.5 15.5V10.26C22.5 9.6 21.86 9.1 21.22 9.31ZM16.02 11.15L14.84 12.09C14.18 12.62 13.34 12.88 12.5 12.88C11.66 12.88 10.81 12.62 10.16 12.09L7.03 9.59C6.71 9.33 6.66 8.85 6.91 8.53C7.17 8.21 7.64 8.15 7.96 8.41L11.09 10.91C11.85 11.52 13.14 11.52 13.9 10.91L15.08 9.97C15.4 9.71 15.88 9.76 16.13 10.09C16.39 10.41 16.34 10.89 16.02 11.15Z" fill="#9DDAF9"/>
                                </svg>}
                        </span>
                        
                    </div>
                } 
                onClick={() => handleToggleReadStatus(index)}
                >
                <p className="text-white text-sm text-justify px-10 w-10/12 ">{item.text}</p>
                </AccordionItem>
            ))}
        </Accordion>

    </div></>)
}
export default ProfileNotification;