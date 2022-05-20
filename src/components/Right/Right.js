import React, { useState } from "react";

function Right({setlogin}){
    const [email,setemail]=useState("");
    const [emailerr,setemailerr]=useState("");
    const [password,setpassword]=useState("");
    
    const [confirmpassword,setconfirmpassword] =useState("");
    const [confirmpassworderr,setconfirmerrpassword] =useState("");
    const [name,setname]=useState('');
    const [number,setnumber]=useState('');
    const [numbererr,setnumbererr]=useState('');
    const [checkbox,setcheckbox]=useState(false);
    const [error,seterror]=useState(false)
    
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    const validate=()=>{
        if(!email||!password||!confirmpassword||!name||!number){
            // setemailerr('');
            // setconfirmerrpassword('');

            alert("All fields are requied");
        }
        
        else{
            if(!email.match(emailRegex)){
                
                setemailerr("Email is not valid. Please enter a correct email ")
                
            }
            else{
                setemailerr('');
            }
            if(password!==confirmpassword){
                setconfirmerrpassword("passwords do not match")
            }
            else{
                setconfirmerrpassword("");
            }
            if(isNaN(number)){
                setnumbererr("Not a valid phone number")
            }
            else{
                setnumbererr("")
            }
            if(!checkbox){
                alert("Please accept terms and conditions")
                seterror(false);
            }
            else{
                seterror(true);
            }
            if(error){
            setlogin();
            }

            
        }
        
        

    }
    return(
        <div className="container form"  >
            <h1 className="form--heading">Create an account</h1>
            <div className="items">
                <label>Your email address</label>
                <input onChange={(e)=>setemail(e.target.value)} className="form--details" type={"email"}></input>
                <p id="email"  className="error">{emailerr}</p>
            </div>
            <div className="items">
                <label>Your Password</label>
                <input onChange={(e)=>setpassword(e.target.value)} className="form--details" type={"password"}></input>
                <p></p>
            </div>
            <div className="items">
                <label>Confirm your password</label>
                <input onChange={(e)=>setconfirmpassword(e.target.value)} className="form--details" type={"password"}></input>
                <p className="error">{confirmpassworderr}</p>
            </div>
            <div className="items">
                <label>Your full name</label>
                <input onChange={(e)=>setname(e.target.value)} className="form--details" type={"text"}></input>
                <p className="error"></p>
            </div>
            <div className="items">
                <label>Your phone number</label>
                <input onChange={(e)=>setnumber(e.target.value)} className="form--details" type={"text"}></input>
                <p className="error">{numbererr}</p>
            </div>
            <div >
                <input onChange={()=>{setcheckbox(!checkbox)}} type="checkbox" />
                <span>I read and agreed Terms and Conditions</span>
            </div>
            <div>
                <button onClick={()=>validate()} >Create account</button>
            </div>
            
        </div>
    )
}

export default Right;