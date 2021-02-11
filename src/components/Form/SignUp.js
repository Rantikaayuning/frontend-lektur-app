import React from 'react'
import {Jumbotron} from "reactstrap"

export default function SignUp() {
    return (
        <Jumbotron className="mb-3 jumbotron">
           <div className="signup">
               <div>
               <p className="signup-title">Start Learning!</p>
               <p className="signup-account">Create your account</p>
               </div>
               <form className="form">
                   <div>Name<span>*</span></div>
                   <input type="text" placeholder="John Doe"/>
                   <div>Email<span>*</span></div>
                   <input type="email" placeholder="john@gmail.com"/>
                   <div>Password<span>*</span></div>
                   <input type="password" placeholder="******"/>
               </form>
               <button className="btn-signup">Sign up</button>
               <div className="signup-login">Already have account?{" "} <span>Login</span></div>
            </div>
        </Jumbotron>
    )
}
