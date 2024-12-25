import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProfileMenu from "../components/ProfileMenu";
import { ProfileProvider } from "../contexts/profile-context";

const ProfileLayout = ()=>{

    return(<>
            <ProfileProvider>
                <div className="col-start-1 sm:col-end-13 col-end-7 flex justify-center  p-5 mb-28 relative">
                    <Outlet/>
                    <ProfileMenu/>
                </div>
            </ProfileProvider>
            </>)
}
export default ProfileLayout;