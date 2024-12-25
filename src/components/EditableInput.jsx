import React, { useState , useEffect} from "react";

function EditableInput({ label, value, name, type, disabled, onChange }) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false); 

  const handleEditable = () => {
    if(disabled==false){
       setEditable(!editable);
      }
   
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  const handleInputChange = (e) => {
    const newValue = e.target.value ?? '';
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-start">
      <label htmlFor={name}>{label}</label>
      <div
        className={`flex justify-between items-center w-full p-3 rounded-md border border-naturalGray-200 text-sm transition-colors ${
          editable ? "bg-white text-black" : "bg-neutral-300 text-naturalGray-200"
        }`}
      >
        <input
          className="outline-none bg-inherit"
          disabled={!editable}
          type={showPassword ? "text" : type}
          name={name}
          id={name}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex items-center gap-2">
          {(type === "password" && editable) &&(
            <div onClick={togglePasswordVisibility} className="cursor-pointer">
              {showPassword ? (
                // Eye open icon
                <svg className=" text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
              ) : (
                // Eye closed icon
                <svg className=" text-naturalGray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
              )}
            </div>
          )}
          <div onClick={handleEditable} className="cursor-pointer">
            {editable ? (
              // SVG for "checked" state
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#FF8F00"
                />
              </svg>
            ) : (
              // Original SVG
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21 22.5H3C2.59 22.5 2.25 22.16 2.25 21.75C2.25 21.34 2.59 21 3 21H21C21.41 21 21.75 21.34 21.75 21.75C21.75 22.16 21.41 22.5 21 22.5Z"
                  fill="#797979"
                />
                <path
                  d="M19.0186 3.98004C17.0786 2.04004 15.1786 1.99004 13.1886 3.98004L11.9786 5.19004C11.8786 5.29004 11.8386 5.45004 11.8786 5.59004C12.6386 8.24004 14.7586 10.36 17.4086 11.12C17.4486 11.13 17.4886 11.14 17.5286 11.14C17.6386 11.14 17.7386 11.1 17.8186 11.02L19.0186 9.81004C20.0086 8.83004 20.4886 7.88004 20.4886 6.92004C20.4986 5.93004 20.0186 4.97004 19.0186 3.98004Z"
                  fill="#797979"
                />
                <path
                  d="M15.6084 12.03C15.3184 11.89 15.0384 11.75 14.7684 11.59C14.5484 11.46 14.3384 11.32 14.1284 11.17C13.9584 11.06 13.7584 10.9 13.5684 10.74C13.5484 10.73 13.4784 10.67 13.3984 10.59C13.0684 10.31 12.6984 9.95005 12.3684 9.55005C12.3384 9.53005 12.2884 9.46005 12.2184 9.37005C12.1184 9.25005 11.9484 9.05005 11.7984 8.82005C11.6784 8.67005 11.5384 8.45005 11.4084 8.23005C11.2484 7.96005 11.1084 7.69005 10.9684 7.41005C10.9472 7.36465 10.9267 7.31949 10.9068 7.27458C10.7592 6.94127 10.3246 6.84382 10.0668 7.10158L4.33837 12.83C4.20837 12.96 4.08837 13.21 4.05837 13.38L3.51837 17.21C3.41837 17.89 3.60837 18.53 4.02837 18.96C4.38837 19.31 4.88837 19.5 5.42837 19.5C5.54837 19.5 5.66837 19.49 5.78837 19.47L9.62837 18.93C9.80837 18.9 10.0584 18.78 10.1784 18.65L15.8997 12.9287C16.1592 12.6692 16.0613 12.2237 15.7237 12.0797C15.6857 12.0634 15.6473 12.0469 15.6084 12.03Z"
                  fill="#797979"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditableInput;
