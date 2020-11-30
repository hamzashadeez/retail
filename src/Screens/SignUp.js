import React, { useState, useContext } from "react";
import "./Styles/SignUp.css";
import { Link } from "react-router-dom";
import { auth, db } from "../Config/firebase";
import uuid from "react-uuid";
import { UserContext } from "../Context/UserContext";

function SignUp() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const [isVendor, setVendor] = useState(false);

  const sign = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(async () => {
      const id = uuid();
      if (isVendor) {
        const vendor = {
          email,
          password,
          first,
          last,
          id,
          listings: [],
          billing: "",
        };
        const setdata = await db
          .collection("vendors")
          .doc(id)
          .set(vendor)
          .then(() => {
            setUser({ isSigned: true });
          })
          .catch((err) => {
            alert(err.message);
          });
      } else {
        const setdata = await db
          .collection("customers")
          .doc(id)
          .set({
            email,
            password,
            first,
            last,
            id,
            cart: [],
            billing: "",
          })
          .then(() => {
            setUser({ isSigned: true });
          })
          .catch((err) => {
            alert(err.message);
          });
      }
    });
  };
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h2 className="text-center">Spree</h2>
          <h3 className="card-title text-center">Create your Spree account</h3>
          <div className="card-text">
            <form onSubmit={sign}>
              {/* <!-- to error: add className "has-danger" --> */}
              <div className="form-group">
                {/* <!-- <label for="exampleInputEmail1">Email address</label> --> */}
                <input
                  type="text"
                  placeholder="First name"
                  className="form-control form-control-sm"
                  id="dsf"
                  aria-describedby="first"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="exampleInputEmail1">Email address</label> --> */}
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-control form-control-sm"
                  id="oopo"
                  aria-describedby="last"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="exampleInputEmail1">Email address</label> --> */}
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-control form-control-sm"
                  id=""
                  aria-describedby="password"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <!-- <label for="exampleInputPassword1">Password</label> --> */}
                <input
                  type="password"
                  placeholder="Create a password"
                  className="form-control form-control-sm"
                  id="psdddd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <a href="#" style={{float:"right",fontSize:"12px"}}>Forgot password?</a>  */}
              </div>
              <div className="" style={{ marginTop: "52px" }}>
                <input
                  type="checkbox"
                  name=""
                  value=""
                  style={{ marginRight: "8px" }}
                  onChange={(e) => {
                    setVendor(e.target.checked);
                  }}
                />
                Vendor
                {/* <a href="#">Signed in </a> <br> Uncheck if using a public device. */}
              </div>

              <div className="" style={{ marginTop: "20px" }}>
                By clicking Create Account, you acknowledge you have read and
                agreed to our
                {/* <a href="#">Terms of Use</a>  and  <a href="#">Privacy Policy</a> . */}
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Create account
              </button>

              <div className="sign-up">
                Already have an account?
                <Link to="/" className="btn btn-create btn-block">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
