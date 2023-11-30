import React, { useState } from "react";

const InputBox = ({ name, icon, type, value, placehoder, id }) => {
  const [ispasswordVisible, setPasswordVisible] = useState(false)

  const[eye, setEye] =useState("eye-crossed")
  return (
    <div className=" relative w-[100%] mb-4">
      <input
        type={type == "password" ? ispasswordVisible ? "text" : "password" : type}
        name={name}
        placeholder={placehoder}
        id={id}
        defaultValue={value}
        className="input-box"
      />
      <i className={"fi " + icon + " input-icon text-xl"}></i>
      {type == "password" ? (
        <i
          className={
            "fi fi-rr-" + eye + " input-icon left-[auto] right-4 cursor-pointer"
          }
          onClick={() => {
            setPasswordVisible(!ispasswordVisible);
            ispasswordVisible ? setEye("eye") : setEye("eye-crossed")
          }}
          
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;
