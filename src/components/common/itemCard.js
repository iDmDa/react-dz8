function ItemCard({ imgSrc, description, price, size, onAddToCart }) {
    return (
        <div className="items">
            <div className="img-box">
                <img className="cart-img" src={imgSrc} alt={description} />
                <div className="add-to-cart" onClick={onAddToCart}>
                    <img src="/img/shopcartwhite.png" alt="cart" />
                    <p>Add to Cart</p>
                </div>
            </div>
            <p className="description">{description}</p>
            <p className="size">Size: {size}</p>
            <p className="price">{price}</p>
        </div>
    );
}

export default ItemCard;