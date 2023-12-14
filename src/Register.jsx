import React,{useState} from "react";
export const Register=(props)=>
{
    // const [email,setEmail]=useState('');
    // const [pass,setPass]=useState('');
    // const [name,setName]=useState('');

    // const handleSubmit=(e)=>
    // {
    //     e.preventDefault();
    //     console.log(email);
    // }
    return(
        <div className="auth-form-container">
            <h2>Sign Up Form</h2>
         <form className="register-form" >
            <label>First Name</label>
            <input type="text" placeholder="FirstName"/>
            <label>Last Name</label>
            <input type="text" placeholder="LastName"/>
            <label>Email</label>
            <input  type="email" placeholder="Youremail@gmail.com"/>
            <label>Set Password</label>
            <input  type="password" placeholder="***********" id="password" name="password"/>
            <label>Confirm Password</label>
            <input   type="password" placeholder="***********" id="password" name="password"/>
            <button type="submit">Sign Up</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here.</button>
        
        
        
        
        </div>
    )
}