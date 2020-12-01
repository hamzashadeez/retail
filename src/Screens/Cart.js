import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaArrowRight,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Cart() {
  return (
    <div>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link style={{ textTransform: "capitalize" }}>
              <p style={{ fontSize: "19px" }}>Spree</p>
            </Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <Link id="nav-toggle">
                <span></span>
              </Link>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/fashion">
                  <b>FASHION</b>
                </Link>
              </li>
              <li>
                <Link to="/health">
                  <b>HEALTH & BEAUTY</b>
                </Link>
              </li>
              <li>
                <Link to="/electronics">
                  <b>ELECTRONICS</b>
                </Link>
              </li>
              <li>
                <Link to="/groceries">
                  <b>GROCERIES</b>
                </Link>
              </li>
              <li>
                <Link style={{ textTransform: "capitalize" }}>
                  <div className="">
                    <div className="form-group has-search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="fa fa-search form-control-feedback"></span>
                    </div>
                  </div>
                </Link>
              </li>

              <li className="border_ccc">
                <Link style={{ textTransform: "capitalize" }}>
                  <b>ACCOUNT</b>{" "}
                  <span>
                    <FaUser />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/cart" style={{ textTransform: "capitalize" }}>
                  <b>CART</b>{" "}
                  <span>
                    <FaShoppingCart />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* end of header */}




      

      {/* Footer */}
      <div className="footer  mx-2">
        <div
          className="row"
          style={{
            paddingLeft: "20px",
            marginLeft: "-2px",
            marginRight: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="col-lg-3 "
            style={{
              textAlign: "left",
            }}
          >
            <div>
              <h6>Get to Know Us</h6>
              <ul>
                <li>
                  <Link to="/">Our Company</Link>
                </li>
                <li>
                  <Link to="/">Career</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 "
            style={{
              textAlign: "left",
            }}
          >
            <div>
              <h6>Spree Business</h6>
              <ul>
                <li>
                  <Link to="/">Sell on Spree</Link>
                </li>
                <li>
                  <Link to="/">Advertise With Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 "
            style={{
              textAlign: "left",
            }}
          >
            <div>
              <h6>Customer Service</h6>
              <ul>
                <li>
                  <Link to="/">Contact Us </Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3"
            style={{
              textAlign: "left",
            }}
          >
            <h6>Social</h6>
            <div className="d-flex">
              <div style={{ width: "24px" }}>
                <FaInstagram />
              </div>
              <div style={{ width: "24px" }}>
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
