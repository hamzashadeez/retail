import React, { useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { FaArrowLeft } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router-dom";
function Fashion() {
  const [data, setData] = useContext(DataContext);
  return (
    <div style={{ flex: 1, width: "100%", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          paddingLeft: "20px",
          backgroundColor: "#024dda",
          color: "#fff",
        }}
      >
        <Link to="/" style={{color: '#fff', marginRight: '20px'}}>
          <FaArrowLeft />
        </Link>
        <h1 style={{ fontSize: "20px",margin: 0, marginLeft: "20px", color: "white", textAlign: 'center' }}>
          FASHION
        </h1>
      </div>
      <div className="m-2">
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
  );
}

export default Fashion;
