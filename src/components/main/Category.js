import React from 'react';

function CategoryItem({ imgSrc, title, subtitle }) {
  return (
    <div className="img-box">
      <img src={imgSrc} alt={title} />
      <div className="category-type">
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function Category() {
  return (
    <section id="category">
      <div className="left-col">
        <CategoryItem imgSrc="/img/man.png" title="for men" subtitle="hot deal" />
        <CategoryItem imgSrc="/img/accessories.png" title="ACCESORIES" subtitle="LUXIROUS & trendy" />
      </div>
      <div className="right-col">
        <CategoryItem imgSrc="/img/women.png" title="for women" subtitle="hot deal" />
        <CategoryItem imgSrc="/img/kids.png" title="for kids" subtitle="hot deal" />
      </div>
    </section>
  );
}

export default Category;
