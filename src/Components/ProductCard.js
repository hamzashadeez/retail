import React from "react";

function ProductCard({name, price, img}) {
  return (
    // <div className="row border-1" style={{ marginLeft: "-2px" }}>
      <div className="col-lg-3 w20" style={{display: "flex", flexDirection: 'column', justifyContent: "flex-start"}}>
        {img ?
        <img src={img} style={{width: "100%", height: "175px"}} alt="img" />
        :<img src='https://www.rocketleaguedesigns.com/wp-content/themes/flymag/images/placeholder.png' style={{width: "100%", height: "175px"}} alt="img" />
        }
        <span className="font-weight500" style={{textAlign: 'left'}}>
          {name}
        </span>
        <h4 style={{textAlign: 'left'}}>${price}</h4>
        <button className="add_card">Add to cart</button>
      </div>
    // </div>
  );
}

export default ProductCard;
