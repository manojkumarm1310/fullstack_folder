import React, { useEffect, useState } from 'react'
import {FiMail} from "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import "../RegisterPage/RegisterPage.css"
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate =useNavigate()
    const [error,setError] =useState({})
    const [submit,setSubmit] =useState(false)
  
    const [data,setData] =useState({
        email:"",
        password:"",
    })

    const handleChange=(e)=>{
        const newObj={...data,[e.target.name]:e.target.value}
        setData(newObj)
    }
 

    const handleSignUp=(e)=>{
        e.preventDefault()
       let errorvalidation=(validationLogin(data))
       setError(errorvalidation)
       setSubmit(true)
       if(errorvalidation.email=="" && errorvalidation.password=="")
       {
        navigate("/home")
       }
    }



   function validationLogin(data){
        const error ={}

        if(data.email === ""){
            error.email ="* Email is Required"
        }
        else{
            error.email=""
        }

        
        if(data.password === ""){
            error.password = "* Password is Required"
        }
        else{
            error.password=""
        }
        
        return error
   }



  return (
    <div className="container">
        <div className="container-form">
            <form onSubmit={handleSignUp}>
                <h1>Login</h1>
                <p>Please sign in to continue.</p>
                <div className="inputBox">
                    <FiMail className='mail'/>
                    <input type="email" 
                            name="email" 
                            id="email" 
                            onChange={handleChange}
                            placeholder='Email'/> 
                </div>
                {error.email && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.email}</span>}

                <div className="inputBox">
                    <RiLockPasswordLine className='password'/>
                    <input type="password" 
                            name="password" 
                            id="password" 
                            onChange={handleChange}
                            placeholder='Password'/>
                </div>
                {error.password && <span style={{color:"red",display:"block",marginTop:"5px"}}>{error.password}</span>}
               

                <div className='divBtn'>
                    <small className='FG'>Forgot Password?</small>
                    <button type='submit' className='loginBtn'>LOGIN</button>
                </div>
                
            </form>

            <div className='dont'>
                <p>Don't have an account? <Link to="/signup"><span>Sign up</span></Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login