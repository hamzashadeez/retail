import React from "react";

function ProductCard({name, price, img}) {

const addToCart = () =>{
  alert('Added')
}

  return (
    // <div className="row border-1" style={{ marginLeft: "-2px" }}>
      <div className="col-lg-3 w20" style={{display: "flex", flexDirection: 'column', justifyContent: "flex-start"}}>
        {img ?
        <img src={img} style={{width: "100%", height: "175px"}} alt="img" />
        :<img src='https://www.rocketleaguedesigns.com/wp-content/themes/flymag/images/placeholder.png' style={{width: "100%", height: "175px"}} alt="img" />
        }
        <span className="font-weight500" style={{textAlign: 'left', color: '#444', fontSize: "13px", marginBottom: "5px"}}>
          {name}
        </span>
        <h6 style={{textAlign: 'left'}}><b>${price}</b></h6>
        <button className="add_card" onClick={()=>addToCart}>Add to cart</button>
      </div>
    // </div>
  );
}

export default ProductCard;
