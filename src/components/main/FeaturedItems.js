import React from 'react';
import ItemCard from '../common/itemCard';

function FeaturedItems() {

  const featureditems = [
    { id: 1, imgSrc: "/img/item1.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 2, imgSrc: "/img/item2.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 3, imgSrc: "/img/item3.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 4, imgSrc: "/img/item4.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 5, imgSrc: "/img/item5.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 6, imgSrc: "/img/item6.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 7, imgSrc: "/img/item7.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
    { id: 8, imgSrc: "/img/item8.png", description: "Mango People T-shirt", price: "$52.00", size: "XL" },
  ];

  return (
    <section id="featured-items">
      <div className="header">
        <h2>Featured Items</h2>
        <h3>Shop for items based on what we featured this week</h3>
      </div>
      <div className="content">
        {featureditems.map(item => (
          <ItemCard
            key={item.id}
            imgSrc={item.imgSrc}
            description={item.description}
            price={item.price}
            size={item.size}
          />
        ))}
      </div>
      <div className="button">Browse All Product →</div>
    </section>
  );
}

export default FeaturedItems;
