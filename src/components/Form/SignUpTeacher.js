import React, {useState} from 'react'
import {Jumbotron} from "reactstrap"
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";

import {postSignupTeacher} from "../../redux/actions/UserAction"

export default function SignUpTeacher() {
    const [userTeacher, setUserTeacher] = useState({
        fullname: "",
        email: "",
        password: "",
      });
    
      const dispatch = useDispatch();
    
      const handleSignUp = e => {
        setUserTeacher({
          ...userTeacher,
          [e.target.name]: e.target.value,
        })
      }
    
      const submitTeacher = (e) => {
        const body = {
          fullname:userTeacher.fullname,
          email: userTeacher.email,
          password: userTeacher.password,
        }
        dispatch(postSignupTeacher(body));
      }

    return (
        <Jumbotron className="mb-3 jumbotron">
           <div className="signup">
               <div>
               <p className="signup-title">Start Learning!</p>
               <p className="signup-account">Create your account</p>
               </div>
               <form className="form">
                   <div>Name<span>*</span></div>
                   <input 
                        type="text" 
                        placeholder="John Doe" 
                        name="fullname"
                        onChange={(e) => handleSignUp(e)}
                    />
                   <div>Email<span>*</span></div>
                   <input 
                        type="email" 
                        placeholder="john@gmail.com"
                        name="email"
                        onChange={(e) => handleSignUp(e)}
                    />
                   <div>Password<span>*</span></div>
                   <input 
                        type="password" 
                        placeholder="******"
                        name="password"
                        onChange={(e) => handleSignUp(e)}
                    />
               </form>
               <br/>
               <div className='btn'>
                    <button className="btn-signup" onClick={submitTeacher}>Sign up</button>
               </div>
               <div className="signup-login">Already have account?{" "} <Link to='/login'><span>Login</span></Link></div>
            </div>
        </Jumbotron>
    )
}
