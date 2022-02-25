import React, { useState } from 'react';
import { useGlobalContext } from './context';

const Tour = ({ image, info, name, price, id }) => {
  const [readMore, setReadmore] = useState(false);
  const { removeTour } = useGlobalContext();
  return (
    <article className="single-tour">
      <footer>
        <img src={image} alt={name} />
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.slice(0, 180)}...`}
          <button onClick={() => setReadmore(!readMore)}>read more</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
