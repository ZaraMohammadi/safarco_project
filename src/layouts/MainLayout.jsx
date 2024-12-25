import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ArticleProvider } from "../contexts/article-context";

const MainLayout = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const handleHamberger = () => {
    console.log(isSidebar);
    setIsSidebar(true);
  };
  const handleCloseSidebar = () => {
    setIsSidebar(false);
  };
  return (
    <>
    <ArticleProvider>
      <div className="grid sm:grid-cols-12 grid-cols-6 gap-3 font-vazir sm:px-[60px] px-[16px] ">
        <Navbar handleHamberger={handleHamberger} />
        <Sidebar
          handleCloseSidebar={handleCloseSidebar}
          isSidebar={isSidebar}
        />
        <Outlet/>
      </div>
      <Footer />
      </ArticleProvider>
    </>
  );
};
export default MainLayout;
