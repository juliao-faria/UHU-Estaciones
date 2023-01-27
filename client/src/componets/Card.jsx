import React from "react";
import  "./Card.css"

const Card = (props) => {
  return (
    <div className="col-lg-8 m-auto">
      <div className="card">{props.children}</div>
    </div>

  )
}
export default Card;