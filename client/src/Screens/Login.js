import React, {useState, useContext} from "react";
import './Styles/Login.css'
import {Link} from 'react-router-dom'
import {auth} from '../Config/firebase'
import {UserContext} from '../Context/UserContext'

function Login() {
    const [_, setUser] = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('log')
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setUser({ isSigned: true});
        }).catch((error)=>{
            alert(error.message)
        })
    }
  return (
    <div>
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h2 className="text-center">Spree</h2>
            <h3 className="card-title text-center">
              Sign in to your Spree account
            </h3>
            <div className="card-text">
            {/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  {/* <label for="exampleInputEmail1">Email address</label> */}
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-control form-control-sm"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelqp"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                 {/* <label for="exampleInputPassword1">Password</label>  */}
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control form-control-sm"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <Link
                    to='/forgot_password'
                    style={{float:"right",fontSize:'12px'}}
                  >
                    Forgot password?
                  </Link>
                </div>
                <div style={{marginTop: '52px'}}>
                  <input
                    type="checkbox"
                    name=""
                    value=""
                    style={{marginRight: '8px'}}
                  />
                  Keep me
                  {/* Signed in <br> Uncheck if using a public device. */}
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Sign in
                </button>

                <div className="sign-up">
                  Don't have an account?
                  <Link to='/signup'  className="btn btn-create btn-block">
                   Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
