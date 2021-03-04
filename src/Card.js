import React from "react";


const Card = (props) => {
   return (<div className="card">
    <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.descripcion}</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>)
}

export default Card;



