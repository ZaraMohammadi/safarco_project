const Footer = () => {
  return (
    <>
      <div className="bg-[#0E453A] w-full p-12">
        <div className="text-red-50 relative mb-12">
          <div className="flex border-1 border-white rounded-md bg-white  ">
            <div className="flex flex-col w-1/3 opacity-50">
              <img src=".\images\photo3.png" alt="" />
              <img src=".\images\photo6.png" alt="" />
              <img src=".\images\photo9.png" alt="" />
            </div>
            <div className="flex flex-col  w-1/3 opacity-50">
              <img src=".\images\photo2.png" alt="" />
              <img src=".\images\photo5.png" alt="" />
              <img src=".\images\photo8.png" alt="" />
            </div>
            <div className="flex flex-col w-1/3 opacity-50">
              <img src=".\images\photo.png"  alt="" />
              <img src=".\images\photo4.png" alt="" />
              <img src=".\images\photo7.png" alt="" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center sm:text-8xl text-3xl text-white">
            <span>همه جای ایران سرای من است</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-6 mb-16">
          <div className="sm:col-start-1 sm:col-end-3 flex sm:flex-col flex-row items-center sm:items-start gap-10 mb-16">
            <div className="flex items-center gap-3 text-white text-lg font-semibold ">
              <img className="sm:w-16 w-10" src=".\images\Logo.svg" alt="" />
              <span>کشف کنید، تجربه کنید</span>
            </div>
            <div className="flex hidden sm:block text-white mb-16 sm:mb-0">
                
                <span>(<span className="text-primary-500">سفرکو</span> )یک پلفترم بزرگ شناخت جاذبه های گردشگری است.هدف ما از این کار شناخت تمامی نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان است ، تا به صنعت گردشگری ایران کمک کنیم.
                </span>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-primary-500">  شبکه های اجتماعی ما:</span>
              <div className="flex gap-4 justify-center">
                <a href=""><img className="w-7 sm:w-9" src=".\icons\Telegram.svg " alt="" /></a>
                <a href=""><img className="w-7 sm:w-9" src=".\icons\Linkedin.svg" alt="" /></a>
                <a href=""><img className="w-7 sm:w-9" src=".\icons\Instagram.svg" alt="" /></a>
              </div>
            </div>
          </div>

          <div className="sm:col-start-4 sm:col-end-7 flex md:gap-28 gap-4 items-start">
            <div className="flex flex-col gap-5 text-white justify-center items-center  sm:text-medium text-xs">
              <a className="text-primary-500 font-semibold text-lg" href="">خدمات سریع</a>
              <a href="">بازگشت به صفحه اصلی</a>
              <a href="">دانلود نسخه اپلیکیشن</a>
              <a href="">مقالات گردشگری</a>
              <a href="">تجربه های سفر</a>
              <a href="">برنامه ریزی سفر</a>
              <a href="">ایران شناسی</a>
            </div>
            <div className="flex flex-col gap-5 text-white justify-center items-center sm:text-medium text-xs">
              <a className="text-primary-500 font-semibold text-lg" href="">ارتباط با ما</a>
              <a href="">تماس با پشتیبانی</a>
              <a href="">موقعیت مکانی ما</a>
              <a href="">حریم خصوصی</a>
              <a href="">ارسال تیکت</a>
              <a href="">درباره ما</a>
              <a href="">کوکی ها</a>
            </div>
            <div className="flex flex-col gap-5 text-white justify-center items-center  sm:text-medium text-xs">
              <a className="text-primary-500 font-semibold text-lg" href="">پروفایل کاربری</a>
              <a href="">ویرایش پروفایل</a>
              <a href="">اعلان ها</a>
              <a href="">تیکت های من</a>
            </div>            
          </div>
        </div>

        <div className="flex flex-col  text-xs gap-4 mb-16">
          <span className="text-primary-500 text-medium">عضویت در خبرنامه ما</span>
          <span className="text-white">با عضو شدن در خبرنامه از اخبار گردشگری
          ما جا نمون:)</span>
          <div className="flex items-center justify-between border-1 rounded-md p-2 sm:w-1/5 w-2/3">
            <input className="bg-inherit outline-none text-white" placeholder="ایمیل خود را وارد کنید" type="text"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 26" fill="none">
              <path d="M6.42469 16.7808L15.698 21.4175C21.9271 24.5375 24.4838 21.9808 21.3638 15.7516L20.4213 13.8666C20.1505 13.3141 20.1505 12.675 20.4213 12.1225L21.3638 10.2483C24.4838 4.01919 21.938 1.46253 15.698 4.58253L6.42469 9.21919C2.26469 11.2991 2.26469 14.7008 6.42469 16.7808ZM9.92386 12.1875H15.7738C16.218 12.1875 16.5863 12.5558 16.5863 13C16.5863 13.4441 16.218 13.8125 15.7738 13.8125H9.92386C9.47969 13.8125 9.11136 13.4441 9.11136 13C9.11136 12.5558 9.47969 12.1875 9.92386 12.1875Z" fill="#E6E6E6"/>
            </svg>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1 text-white text-xs">
            <span>تمامی حقوق این وبسایت متعلق به سفرکو است</span>
            <span>و هر گونه کپی برداری مطالب با ذکر منبع بلامانع است.</span>
          </div>
          <div className="flex gap-1 w-1/2 sm:w-4/5 sm:justify-end">
            <img className="w-1/4 sm:w-16" src=".\images\picture.svg" alt="" />
            <img className="w-1/4 sm:w-16" src=".\images\picture2.svg" alt="" />
            <img className="w-1/4 sm:w-16" src=".\images\picture3.svg" alt="" />
            <img className="w-1/4 sm:w-16" src=".\images\picture4.svg" alt="" />
          </div>
        </div>

      </div>
    </>
  );
};
export default Footer;
