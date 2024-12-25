import { useContext } from "react";
import EditableInput from "./EditableInput";
import { ProfileContext } from "../contexts/profile-context";
import { useEffect } from "react";
import axios from 'axios';

const EditProfile = () =>{

    const {errorMessage,updateResponse,setUpdateResponse,userName,updatedUserName,updatedUserMobile,updatedUserPassword,
           userMobile,userPassword,setUserName,setUserMobile,setUserPassword,
           setUpdatedUserName,setUpdatedUserMobile,setUpdatedUserPassword,setErrorMessage,
           userToken,setUserToken } = useContext(ProfileContext)

    const fetchData = async (token) => {
    try {
    const response = await axios.get('https://safarico.liara.run/api/userinfo', {
    headers: {
        Authorization: `Bearer ${token}`, 
    },
    });

    console.log(response.data)

    const user = response.data?.user;

    console.log("response"+user.name+user.phone+user.password);

    setUserName(user.name)
    setUserMobile(user.phone);
    setUserPassword(user.password);

    setUpdatedUserName(user.name);
    setUpdatedUserMobile(user.phone);
    setUpdatedUserPassword(user.password);

    console.log("اولی"+userName + " "+userMobile + " " + userPassword)

    } catch (error) {

    console.error("Error fetching data:", error);
    console.log(error.message);
    }
    };

    useEffect(() => {
    const Token = JSON.parse(localStorage.getItem("token"));
    setUserToken(Token);
    }, []);

    useEffect(() => {
    if (userToken) {
        fetchData(userToken);
    }
    }, [userToken]);


    const updateData = async (token) => {
    try {
        const response = await axios.post('https://safarico.liara.run/api/edit-profile', 
        { 
        
            name: updatedUserName, 
            password: updatedUserPassword, 
        
        },
        {
        headers: {
            Authorization: `Bearer ${token}`, 
            'Content-Type': 'application/json',
        },
        });

        console.log(response.data);
        setUpdateResponse(response.data.message);
        fetchData(userToken);
        
    } catch (error) {

        console.error("Error updating data:", error);
        console.log(error.message);
        setUpdateResponse(error.message)
    }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
         
        if(updatedUserName!=null && updatedUserPassword!=null){
            if(updatedUserName.length<2 ){
                setErrorMessage("نام و نام خانوادگی نمیتواند کمتر از 2 کاراکتر باشد")
            }else if(updatedUserPassword.length<8 ){
                setErrorMessage("رمز عبور باید حداقل شامل 8 کاراکتر باشد")
            }else{
                updateData(userToken);
                setErrorMessage("");
               console.log(22)
            }
        }else{
            setErrorMessage("لطفا قسمت های خالی را پر کنید")
        } 
    }

    const handleDiscard=(e)=>{
        e.preventDefault();
        setUpdatedUserName(userName);
        setUpdatedUserMobile(userMobile);
        setUpdatedUserPassword(userPassword);
    }
    
            
    return(<>
        <div className="flex flex-col gap-8 bg-primary-500 px-6 pt-36 sm:pt-8 py-8 rounded-md sm:w-1/2 md:w-1/3 w-full text-white">
            <div className="flex flex-col gap-3 w-full items-center"> 
                <span className="text-red-500">{errorMessage}</span>
                <span className="text-black">{updateResponse}</span>
                <div className="border border-white w-20 h-20 rounded-full overflow-hidden"><img className="object-cover" src=".\images\user-image.png" alt="" /></div>
                <span>{userName}</span>
            </div>
            <form className="flex flex-col gap-6">

                <EditableInput label="نام و نام خانوادگی" value={updatedUserName} name="name" type="text"  disabled={false} onChange={(e) => setUpdatedUserName(e)} />
                <EditableInput label="شماره موبایل" value={updatedUserMobile} name="mobile" type="mobile"  disabled={true} onChange={(e) => setUpdatedUserMobile(e)} />
                <EditableInput label="پسورد" value={updatedUserPassword} name="password" type="password"    disabled={false} onChange={(e) => setUpdatedUserPassword(e)} />

                            
                <div className="flex gap-10 items-center justify-center text-black">
                    <button onClick={handleDiscard} className="bg-naturalGray-300 py-2 px-7 rounded-md">انصراف</button>
                    <button onClick={handleSubmit} className="bg-secondary-400 p-2 rounded-md">ذخیره تغییرات</button>
                
                </div>
            </form>
        </div>
    
    </>)
}
export default EditProfile;