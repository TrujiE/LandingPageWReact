import React from "react";
import Card from "./Card";

const Card2 = () =>{
	return (<div className="card-deck">
        <Card title="Primera Carta" descripcion="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.The standard chunk of Lorem Ipsum used since the 1500s is reproduced."/>
        <Card title="Segunda Carta" descripcion="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
        <Card title="Tercera Carta" descripcion="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly."/>
        <Card title="Cuarta  Carta" descripcion="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal."/>
      </div>)
}


export default Card2;