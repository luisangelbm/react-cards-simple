import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Twitter Luisangel",
      image: image1,
      url: 'https://github.com/luisangelbm',
    },
    {
      id: 2,
      title: "IG luisangel",
      image: image2,
      url: 'https://github.com/luisangelbm'
    },
    {
      id: 3,
      title: "Youtube Luisangel",
      image: image3,
      url: 'https://github.com/luisangelbm'
    },
  ];

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4" key={card.id}>
              <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
