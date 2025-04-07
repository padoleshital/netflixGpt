import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
 const [isSignInForm, setSignInForm] = useState(true);


const toggleSignInForm =() =>{
    setSignInForm(!isSignInForm)
}
    return (
        < >
        <Header/>
            <div className="absolute">
                <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
            </div>
        
            <form className="w-3/12 p-12 absolute bg-black/80 text-white my-20 mx-auto left-0 right-0 ">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>          
               
                {!isSignInForm && <input type="text" className="p-2 my-4 w-full bg-zinc-800 text-gray-500" placeholder="Full Name"/> }
                <input type="text" className="p-2 my-4 w-full bg-zinc-800 text-gray-500" placeholder="Email or phone number"/>
                <input type="password" className="p-2 my-4 w-full bg-zinc-800 text-gray-500" placeholder="Password"/>
                
                <button className="py-2 my-4 w-full bg-red-600 font-semibold cursor-pointer" type="submit">{isSignInForm ? "Sign In" : "Sign up"} </button>
        
                <p className="py-2 my-4" onClick = {toggleSignInForm}>
                    { isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In now"}
                </p>

            </form>
       </>            
    );
}
export default Login;