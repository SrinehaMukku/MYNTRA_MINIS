import React, { useState } from "react";
import {  LoginAPI } from "../api/AuthAPI";
import Logo from "../assets/logo.jpg";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import '../styles/LoginComponent.css';


export default function LoginComponent() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      //console.log(res?.user);
      toast.success('Successfully signed in ')
    }catch(err){
      console.log(err);

    }
    //   if (res.user) {
    //     toast.success("Signed In successfully");
    //   } else {
    //     throw res;
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Please Check your Credentials");
    // }
  };

  // const googleSignIn = async () => {
  //   try {
  //     let res = await GoogleAPI();
  //     if (res.user) {
  //       toast.success("Signed In successfully with Google");
  //     } else {
  //       throw res;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Google Sign-In failed");
  //   }
  // };

  return (
    <div className="login-wrapper">
      <img src={Logo} className="linkedinLogo" alt="logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">To explore world of fashion</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
       <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={() => {
          console.log("Google button clicked");
        } }
        />

        <p className="go-to-signup">
          New to MYNTRA?
          <span className="join-now">
            Join now
          </span>
        </p>


      </div> 
    </div>
  );
}
