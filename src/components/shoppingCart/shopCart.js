import React, { useContext } from "react";
import { CartContext } from "../common/CartContext"; // Импортируем контекст корзины

const ShoppingCart = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity, clearCart } = useContext(CartContext); // Добавлены функции для увеличения и уменьшения количества

  // Подсчет общей суммы товаров в корзине
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Функция для изменения количества через input
  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      const quantityDifference = newQuantity - item.quantity;
      if (quantityDifference > 0) {
        for (let i = 0; i < quantityDifference; i++) {
          addToCart(item); // Увеличиваем количество товара
        }
      } else if (quantityDifference < 0) {
        for (let i = 0; i < Math.abs(quantityDifference); i++) {
          decreaseQuantity(item); // Уменьшаем количество товара
        }
      }
    }
  };

  return (
    <main className="shopping_cart">
      <section className="product-details">
        <div className="item header">
          <h3>Product Details</h3>
          <h3>Unit Price</h3>
          <h3>Quantity</h3>
          <h3>Shipping</h3>
          <h3>Subtotal</h3>
          <h3>Action</h3>
        </div>

        <div className="separator"></div>

        {cartItems.map((item, index) => (
          <div key={index} className="item">
            <div className="mini">
              <div className="img-box">
                <img src={item.imgSrc} alt={item.description} />
              </div>
              <div className="info">
                <h4>{item.description}</h4>
                <p>Color: <span>{item.color}</span></p>
                <p>Size: <span>{item.size}</span></p>
              </div>
            </div>
            <div>${item.price}</div>

            <div>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                min="1"
                className="quantity-input txt-box"
              />
            </div>

            <div>FREE</div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
            <div>
              <img
                src="/img/shop-cancel.png"
                alt="Remove"
                onClick={() => removeFromCart(item)} // Удаление товара
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        ))}

        <div className="separator"></div>
      </section>

      <section className="buttons">
        <div onClick={clearCart} style={{ cursor: 'pointer' }}>CLEAR SHOPPING CART</div>
        <div>CONTINUE SHOPPING</div>
      </section>

      <section className="info">
        <div className="address">
          <h2>Shipping Address</h2>
          <select>
            <option value="1" selected>Bangladesh</option>
            <option value="2">Other</option>
          </select>
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Postcode / Zip" />
          <div className="button">Get a quote</div>
        </div>

        <div className="discount">
          <h2>Coupon Discount</h2>
          <p>Enter your coupon code if you have one</p>
          <input type="text" placeholder="Coupon code" />
          <div className="button">Apply Coupon</div>
        </div>

        <div className="total">
          <p>Sub total &nbsp;&nbsp;&nbsp;<span>${totalAmount.toFixed(2)}</span></p>
          <h2>GRAND TOTAL &nbsp;&nbsp;&nbsp;<span>${totalAmount.toFixed(2)}</span></h2>
          <div className="separator"></div>
          <div className="total-btn">Proceed to Checkout</div>
        </div>
      </section>
    </main>
  );
};

export default ShoppingCart;
