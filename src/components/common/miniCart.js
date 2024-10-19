import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const MiniCart = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <>
      <li>
        <div>
          <img className="imgPreview" src={item.imgSrc} alt={item.description} />
        </div>
        <div>
          <h2>{item.description}</h2>
          <p className="summ-price">{item.quantity} <span>x</span> {item.price}</p>
        </div>
        <div>
          <img
            className="cancel"
            src="/img/cancel.png"
            alt="Remove item"
            onClick={() => removeFromCart(item)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </li>
      <div className="line"></div>
    </>
  );
};

export default MiniCart;
