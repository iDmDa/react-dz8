import React from 'react';

// Главный компонент для отображения всех карточек
const ProductList = () => {
    return (
        <section className="product-list">
            <div className="nav">
                <div className="lists">
                    <p><img src="/img/left-a.png" alt="" /></p>
                    <p className="active">1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6 . . . 20</p>
                    <p><img src="/img/right-a.png" alt="" /></p>
                </div>
            </div>
            <div className="button">View All</div>
        </section>
    );
};

export default ProductList;
