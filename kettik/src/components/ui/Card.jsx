import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ idx, title, events,image,data  }) => {
  return (
    <>
          <Link to={`/card/${idx}`}>
            <div key={`items-${idx}`} className="item">
              <img src={image} alt={title} />
              <h2>{events}</h2>
              <p className="item-title">{title}</p>
              <div>
                <p className="item-data">{data}</p>
              </div>
            </div>
          </Link>
    </>
  );
};

export default Card;
