import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { items } from "../../data/events";
import '../../assets/style/CardDetail.css' // assuming this is where your event data is stored

const CardDetail = () => {
  const { id } = useParams(); // get the id parameter from the URL
  const card = items[id]; // get the corresponding card object from the items array

  if (!card) {
    return <h1>Card not found</h1>; // handle the case where the card is not found
  }

  return (
    <>
        <Link to={'/'}>Go to Menu</Link>
        <div>
        <h2>{card.events}</h2>
        <img src={card.image} alt={card.title} />
        <p className="item-title">{card.title}</p>
        <div>
            <p className="item-data">{card.data}</p>
        </div>
        </div>
    </>
  );
};

export default CardDetail;
