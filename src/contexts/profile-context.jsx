import { createContext } from "react";
import { useState } from "react";

const ProfileContext =createContext();

const ProfileProvider = ({children})=>{

    const [userName,setUserName] = useState('');
    const [userMobile,setUserMobile] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [updatedUserName,setUpdatedUserName] = useState('');
    const [updatedUserMobile,setUpdatedUserMobile] = useState('');
    const [updatedUserPassword,setUpdatedUserPassword] = useState('');
  
    const [userToken,setUserToken] = useState("");
    
    const [errorMessage,setErrorMessage] = useState("");
  
    const [updateResponse,setUpdateResponse] = useState("");


    return(
        <ProfileContext.Provider value={{userName,setUserName,userMobile,setUserMobile,userPassword,setUserPassword,
                                         updatedUserName,setUpdatedUserName,updatedUserMobile,setUpdatedUserMobile,updatedUserPassword,setUpdatedUserPassword,
                                         userToken,setUserToken,errorMessage,setErrorMessage,updateResponse,setUpdateResponse}}>
            {children}
        </ProfileContext.Provider>
    )
}

export {ProfileContext, ProfileProvider}