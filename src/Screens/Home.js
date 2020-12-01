import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaArrowRight, FaTwitter, FaInstagram } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../Components/ProductCard";
import { DataContext } from "../Context/DataContext";

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

function Home() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [data, setData] = useContext(DataContext);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {}, []);
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
                <Link to='/cart' style={{ textTransform: "capitalize" }}>
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
      <div style={{ height: "100px" }}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ height: "100px !important" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TzEe9zpVO4Xr3PoMykXg0p9NTxy6Hgc2Dg&usqp=CAU"
              alt="First slide"
              height={200}
            />
            <Carousel.Caption>
              <h3>Buying and selling is easy now</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={200}
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TzEe9zpVO4Xr3PoMykXg0p9NTxy6Hgc2Dg&usqp=CAU"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>New System For Vendors</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TzEe9zpVO4Xr3PoMykXg0p9NTxy6Hgc2Dg&usqp=CAU"
              alt="Third slide"
              height={200}
            />

            <Carousel.Caption>
              <h3>Sell here & Buy here</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Main */}
      <div className="container">
        {/* Section 1 --- fashiion */}
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>
        <div className=" mt-4 mb-2 pt-4 " style={{ height: "200px" }}>
          <div className="pt-4 mt-4">
            <div
              className="d-flex space-between fs-15 mt-3"
              style={{ marginTop: "44px !important" }}
            >
              <div>
                <h5 className="fs-15">
                  {" "}
                  <b>Discover Latest in Fashion</b>{" "}
                </h5>
              </div>
              <div>
                <Link
                  to="/category"
                  style={{
                    color: "black",
                    fontWeight: 600,
                    marginRight: "20px",
                    fontSize: "1rem",
                  }}
                >
                  Shop All <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="d-flex w-100 ">
              {data.map((product) => {
                if (product.category === "fashion") {
                  console.log(product.name);
                  return (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      img={product.photo}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <h1 style={{ zIndex: 0, opacity: 0 }}>.</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>
        {/* end of fashion */}

        <div className=" mt-4 mb-2 pt-4 " style={{ height: "200px" }}>
          <div className="pt-4 mt-4">
            <div
              className="d-flex space-between fs-15 mt-3"
              style={{ marginTop: "44px !important" }}
            >
              <div>
                <h4 className="fs-15">
                  {" "}
                  <b>Coveted Health & Beauty</b>{" "}
                </h4>
              </div>
              <div>
                <Link
                  to="/category"
                  style={{
                    color: "black",
                    fontWeight: 600,
                    marginRight: "20px",
                  }}
                >
                  Shop All <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="d-flex w-100">
              {data.map((product) => {
                if (product.category === "beauty") {
                  console.log(product.name);
                  return (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      img={product.photo}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <h1 style={{ zIndex: 0, opacity: 0 }}>.</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>
        {/* end of health & beauty */}
        <div className=" mt-4 mb-2 pt-4 " style={{ height: "200px" }}>
          <div className="pt-4 mt-4">
            <div
              className="d-flex space-between fs-15 mt-3"
              style={{ marginTop: "44px !important" }}
            >
              <div>
                <h4 className="fs-15">
                  {" "}
                  <b>Electronics</b>{" "}
                </h4>
              </div>
              <div>
                <Link
                  to="/category"
                  style={{
                    color: "black",
                    fontWeight: 600,
                    marginRight: "20px",
                  }}
                >
                  Shop All <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="d-flex w-100">
              {data.map((product) => {
                if (product.category === "electronics") {
                  console.log(product.name);
                  return (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      img={product.photo}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <h1 style={{ zIndex: 0, opacity: 0 }}>.</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>
        {/* end of Electronics */}

        <div className=" mt-4 mb-2 pt-4 " style={{ height: "200px" }}>
          <div className="pt-4 mt-4">
            <div
              className="d-flex space-between fs-15 mt-3"
              style={{ marginTop: "44px !important" }}
            >
              <div>
                <h4 className="fs-15">
                  {" "}
                  <b>Groceries</b>{" "}
                </h4>
              </div>
              <div>
                <Link
                  to="/category"
                  style={{
                    color: "black",
                    fontWeight: 600,
                    marginRight: "20px",
                  }}
                >
                  Shop All <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="d-flex w-100">
              {data.map((product) => {
                if (product.category === "grocery") {
                  console.log(product.name);
                  return (
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      img={product.photo}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>

        <h1 style={{ zIndex: 0, opacity: 0 }}>.</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>.</h1>
        <h1 style={{ zIndex: 0, opacity: 0 }}>...</h1>

        <div className="mt-4 mb-2 bg-success">
          <div className="container_link">
            <img
              src="https://th.bing.com/th/id/OIP.cNudOUG9GvxqZLbaOxVgLAHaE9?pid=Api&rs=1"
              alt="Snow"
              style={{ width: "100%", height: "200px" }}
            />
            <div className="centered">
              <h4>Finds for family time</h4>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,{" "}
              </span>
            </div>
          </div>
        </div>
       
      </div>
      <div className="footer container">
        <div className="row" style={{ marginLeft: "-2px" }}>
          <div
            className="col-lg-3 "
            style={{
              textAlign: "left"
            }}
          >
            <div>
              <h6>Get to Know Us</h6>
              <ul>
                <li>
                  <Link to='/'>Our Company</Link>
                </li>
                <li>
                  <Link to='/'>Career</Link>
                </li>
                <li>
                  <Link to='/'>Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 " style={{
              textAlign: "left"
            }}>
            <div>
              <h6>Spree Business</h6>
              <ul>
                <li>
                  <Link to='/'>Sell on Spree</Link>
                </li>
                <li>
                  <Link to='/'>Advertise With Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 " style={{
              textAlign: "left"
            }}>
            <div>
              <h6>Customer Service</h6>
              <ul>
                <li>
                  <Link to='/'>Contact Us </Link>
                </li>
                <li>
                  <Link to='/'>FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3" style={{
              textAlign: "left"
            }}>
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

export default Home;
