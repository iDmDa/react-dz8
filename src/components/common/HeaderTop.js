import React, { useContext } from 'react';
import MiniCart from "./miniCart";
import { CartContext } from './CartContext';

const HeaderTop = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <section id="header-top">
      <div id="header-top-logo">
        <a href={`/`}>
          <img src="/img/logo.png" alt="" />
          <p>BRAN<span>D</span></p>
        </a>

      </div>
      <div id="header-input_layer">
        <details id="header-browse">
          <summary>Browse <img src="/img/triangle_down.png" alt="" /></summary>
          <div id="browse-menu">
            <div className="triangle"></div>
            <ul>
              <h2>WOMEN</h2>
              <div className="line"></div>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Sweaters/Knits</li>
              <li>Jackets/Coats</li>
              <li>Blazers</li>
              <li>Denim</li>
              <li>Leggings/Pants</li>
              <li>Skirts/Shorts</li>
              <li>Accessories</li>
            </ul>
            <ul>
              <h2>MEN</h2>
              <div className="line"></div>
              <li>Tees/Tank tops</li>
              <li>Shirts/Polos</li>
              <li>Sweaters</li>
              <li>Sweatshirts/Hoodies</li>
              <li>Blazers</li>
              <li>Jackets/vests</li>
            </ul>
          </div>
        </details>
        <form>
          <input type="search" id="header-input" />
          <button id="header-btn_search">
            <img src="/img/search.png" alt="" />
          </button>
        </form>
      </div>

      <details id="shoppingcart">
        <summary>
          <img src="/img/shoppingcart.png" alt="" />
        </summary>
        <div id="shoppingcart-menu">
          <ul>
            {cartItems.map((item, index) => (
              <MiniCart key={index} item={item} />
            ))}

          </ul>
          <div className="price">
            <div>TOTAL</div>
            <div>${totalAmount.toFixed(2)}</div>
          </div>
          <div className="button checkout">CHECKOUT</div>
          <a href={`/shopcart`}><div className="button gotocadt">GO TO CART</div></a>
        </div>
      </details>

      <details id="myAccButton">
        <summary>My Account <img src="/img/triangle_down_white.png" alt="" /></summary>
      </details>
    </section>
  );
}

export default HeaderTop;