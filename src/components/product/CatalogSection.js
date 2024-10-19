import React from "react";

const CatalogSection = () => {
  const categories = [
    "Accessories",
    "Bags",
    "Denim",
    "Hoodies & Sweatshirts",
    "Jackets & Coats",
    "Pants",
    "Polos",
    "Shirts",
    "Shoes",
    "Shorts",
    "Sweaters & Knits",
    "T-Shirts",
    "Tanks",
  ];

  const renderList = () => (
    <ul>
      {categories.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const renderSummary = (title) => (
    <summary>
      <div className="red-line"></div>
      <div className="cat-name">{title}</div>
      <div className="triangle triangle-open">
        <img src="/img/triangle-open.png" alt="" />
      </div>
      <div className="triangle triangle-close">
        <img src="/img/triangle-close.png" alt="" />
      </div>
    </summary>
  );

  return (
    <section className="catalog">
      <details open>
        {renderSummary("Category")}
        <div>{renderList()}</div>
      </details>
      <details>
        {renderSummary("BRAND")}
        <div>{renderList()}</div>
      </details>
      <details>
        {renderSummary("DESIGNER")}
        <div>{renderList()}</div>
      </details>
    </section>
  );
};

export default CatalogSection;