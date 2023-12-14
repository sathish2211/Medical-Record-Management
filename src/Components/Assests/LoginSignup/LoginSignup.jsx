import React from 'react'
import './LoginSignup.css'

const LoginSignup=()=>


{
    return(
        <div className='container'>
         <div className="header">
          <div className="text">Sign Up</div>  
          <div className="underline"></div>
        </div>  
         <div className="inputs">
            <div className="input">
              <img src="" alt="" />
              <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
              <img src="" alt="" />
              <input type="Email" placeholder='Email'/>
            </div>
            <div className="input">
              <img src="" alt="" />
              <input type="password" placeholder='Password'/>
            </div>
            <div className="submit-container"></div>
            <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
         </div>
        </div>
    );
};
export default LoginSignup