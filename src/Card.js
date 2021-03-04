import React from "react";


const Card = () => {
   return (<div className="card-deck">
  <div className="card">
    <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer.</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>
  <div className="card">
    <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <div className="card-footer" style={{textAlign:"center"}}>
      <button type="button" className="btn btn-primary">Find Out More!</button>
      </div>
    </div>
  </div>  
</div>)

}

export default Card;


