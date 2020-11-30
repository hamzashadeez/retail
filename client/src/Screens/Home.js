import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaArrowRight } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../Components/ProductCard";
import { DataContext } from "../Context/DataContext";
import { db } from "../Config/firebase";

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
            <Link style={{ textTransform: "capitalize" }}>Spree</Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <Link id="nav-toggle">
                <span></span>
              </Link>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/fashion">fashion</Link>
              </li>
              <li>
                <Link to="/health">Health & beauty</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/groceries">Groceries</Link>
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
                  Account{" "}
                  <span>
                    {" "}
                    <FaUser />
                  </span>
                </Link>
              </li>
              <li>
                <Link style={{ textTransform: "capitalize" }}>
                  Cart{" "}
                  <span>
                    {" "}
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
      {/* Section 1 --- fashiion */}
      <div className=" mt-4 mb-2 pt-4 " style={{ height: "200px" }}>
        <div className="pt-4 mt-4">
          <div
            className="d-flex space-between fs-15 mt-3"
            style={{ marginTop: "44px !important" }}
          >
            <div>
              <h4 className="fs-15">
                {" "}
                <b>Fashion</b>{" "}
              </h4>
            </div>
            <div>
              <Link
                to="/fashion"
                style={{ color: "black", fontWeight: 600, marginRight: "20px" }}
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
                <b>Health & Beauty</b>{" "}
              </h4>
            </div>
            <div>
              <Link
                to="/health"
                style={{ color: "black", fontWeight: 600, marginRight: "20px" }}
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
                to="/electronics"
                style={{ color: "black", fontWeight: 600, marginRight: "20px" }}
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
                to="/groceries"
                style={{ color: "black", fontWeight: 600, marginRight: "20px" }}
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
      {/* <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
    </div>
  );
}

export default Home;
