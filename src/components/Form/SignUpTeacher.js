import React from 'react'
import {Jumbotron} from "reactstrap"
import {Link} from 'react-router-dom'

export default function SignUpTeacher() {
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
                        name="username"
                    />
                   <div>Email<span>*</span></div>
                   <input 
                        type="email" 
                        placeholder="john@gmail.com"
                        name="email"
                    />
                   <div>Password<span>*</span></div>
                   <input 
                        type="password" 
                        placeholder="******"
                        name="password"
                    />
               </form>
               <br/>
               <div className='btn'>
                    <button className="btn-signup">Sign up</button>
               </div>
               <div className="signup-login">Already have account?{" "} <Link to='/login'><span>Login</span></Link></div>
            </div>
        </Jumbotron>
    )
}
