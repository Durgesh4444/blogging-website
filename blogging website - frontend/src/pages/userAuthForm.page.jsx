import React from "react";
import InputBox from "../components/input.component";
import {Link} from "react-router-dom"

const UserAuthForm = (props) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
          {props.type == "Sign-in" ? "Welcome Back" : "Join Us Today"}
        </h1>
        {props.type == "Sign-up" ? (
          <InputBox
            name="Full Name"
            type="text"
            placehoder="FullName"
            id=""
            icon="fi-rr-circle-user"
          />
        ) : (
          ""
        )}
        <InputBox
          name="email"
          type="email"
          placehoder="Email"
          id=""
          icon="fi-rr-envelope"
        />
        <InputBox
          name="password"
          type="password"
          placehoder="Password"
          id=""
          icon="fi-rr-key"
        />
        <button className="btn-dark center mt-14 py-2" type="submit">
          {props.type.replace("-", " ")}
        </button>

        <div className=" relative w-full flex items-center gap-2 my-10 opacity-50 uppercase text-black font-bold">
          <hr className="w-1/2 border-black" />
          <p>or</p>
          <hr className="w-1/2 border-black" />
        </div>

        <button className=" btn-dark flex gap-4 center py-2">
        <i className="fi fi-brands-google "></i>
          <p>Continue With Google</p>
        </button>
        {
          props.type == "Sign-in" ?
          <p className="mt-6 text-dark-grey text-xl text-center">Don't Have an Account ?<Link to="/signup" className="underline text-black">Join us Today</Link></p>
          : 
          <p className="mt-6 text-dark-grey text-xl text-center">Already A Member ? <Link to="/signin" className="underline text-black">Sign In Here</Link></p>
          
        }
      </form>
    </section>
  );
};

export default UserAuthForm;
