import React from "react";

function Card({name, price, img, category}) {
  return (
    // <div className="row border-1" style={{ marginLeft: "-2px" }}>
      <div className="col-lg-6 w50  shadow mb-3" style={{display: "flex", flexDirection: 'row', justifyContent: "flex-start", marginRight: 'auto', padding: 0, marginLeft: 'auto'}}>
        {img ?
        <img src={img} style={{maxWidth: "250px", height: "175px", objectFit: "cover"}} alt="img" />
        :<img src='https://www.rocketleaguedesigns.com/wp-content/themes/flymag/images/placeholder.png' style={{maxWidth: "250px", height: "175px", objectFit: "contain"}} alt="img" />
        }
        <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around',paddingLeft: '30px'}}>
        <span className="font-weight500" style={{textAlign: 'left'}}>
          Product Name: {name}
        </span>
        <span className="font-weight500" style={{textAlign: 'left'}}>
          Product Price: ${price}
        </span>
        <span className="font-weight500" style={{textAlign: 'left'}}>
          Product Category: <span style={{textTransform: 'uppercase'}}>{category}</span>
        </span>
        <button className="add_card">Add to cart</button>
      </div>
 </div>
  );
}

export default Card;
