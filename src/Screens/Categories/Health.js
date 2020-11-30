import React, { useState, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { FaArrowLeft } from "react-icons/fa";
import Card from "../../Components/Card";
import { Link } from "react-router-dom";
function Health() {
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
        HEALTH
        </h1>
      </div>
      <div className="m-2 pt-1">
        {data.map((product) => {
          if (product.category === "beauty") {
            console.log(product.name);
            return (
              <Card
                name={product.name}
                price={product.price}
                img={product.photo}
                category={product.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Health;
