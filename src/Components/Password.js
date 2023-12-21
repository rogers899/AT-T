import react from "react";
import { Welcomeimage } from "../assets";
// import {Link} from "react-router-dom";


function Password () {
    return(
        
            <div className="mt-20 lg:pl-80 ">
              <img className="" src={Welcomeimage} alt=""/>
              <p>Welcome</p>
              <div className="bg-white border-2 border-gray-200 px-10 py-20 rounded-3xl lg:w-1/2">
                <div className="mt-8 ">
                <label className="text-x1 font-bold">User ID</label>
                <input className="w-full border-2 rounded-2xl p-2 mt-2 border-gray-500"></input>
                <button className="mt-3 text-center justify-center w-full rounded-2xl  bg-blue-900 text-white px-10 py-3 font-bold">Sign in</button>
                </div>
                <div className="mt-10 font-bold text-blue-900">
                    <p className="">Forgot Password?</p>
                    <p className="mt-3 font-bold text-blue-900">Pay without signing in</p>
                </div>
              </div>
              <div className="mt-20 lg:flex lg:flex-roll">
                <p className="text-sm text-gray-600 mb-3">Legal policy center</p>
                <p className="text-sm text-gray-600 mb-3">Privacy policy</p>
                <p className="text-sm text-gray-600 mb-3">Term of use</p>
                <p className="text-sm text-gray-600 mb-3">Accessibilty</p>
                <p className="text-sm text-gray-600 mb-3">Your privacy choice</p>
                <p className="text-sm text-gray-600 mb-3">&copy;2023 AT&T Intellectual Property. All rights reserved.</p>
              </div>
            </div>
            
       
    )
}

export default Password;