import React, { useContext } from 'react';
import ItemCard from '../common/itemCard';
import { CartContext } from '../common/CartContext';

const productsitems = [
  { id: 1, imgSrc: "/img/product-1.png", description: "Mango People T-shirt", price: 100, size: "XXL" },
  { id: 2, imgSrc: "/img/product-2.png", description: "Mango People T-shirt", price: 152, size: "XXS, XL" },
  { id: 3, imgSrc: "/img/product-3.png", description: "Mango People T-shirt", price: 52, size: "M" },
  { id: 4, imgSrc: "/img/product-4.png", description: "Mango People T-shirt", price: 200, size: "S" },
  { id: 5, imgSrc: "/img/product-5.png", description: "Mango People T-shirt", price: 78, size: "XS" },
  { id: 6, imgSrc: "/img/product-6.png", description: "Mango People T-shirt", price: 350, size: "L" },
  { id: 7, imgSrc: "/img/product-7.png", description: "Mango People T-shirt", price: 125, size: "XS, S" },
  { id: 8, imgSrc: "/img/product-8.png", description: "Mango People T-shirt", price: 20, size: "XXS, XL, XXL" },
  { id: 9, imgSrc: "/img/product-9.png", description: "Mango People T-shirt", price: 99, size: "L, XXL" },
];

const ProductItems = ({ selectedSizes = [], priceRange = [20, 400] }) => {

  const { addToCart } = useContext(CartContext);

  const filteredItems = productsitems.filter(item => {
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => item.size.includes(size));
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesSize && matchesPrice;
  });

  return (
    <section className="content">
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <ItemCard
            key={item.id}
            imgSrc={item.imgSrc}
            description={item.description}
            price={`$${item.price}`}
            size={item.size}
            onAddToCart={() => addToCart(item)}
          />
        ))
      ) : (
        <p>No products ...</p>
      )}
    </section>
  );
};

export default ProductItems;
