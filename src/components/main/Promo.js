import React from 'react';

const Promo = () => {

    const promoItems = [
        {
          imgSrc: '/img/delivery.png',
          title: 'Free Delivery',
          description:
            'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
        },
        {
          imgSrc: '/img/discounts.png',
          title: 'Sales & discounts',
          description:
            'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
        },
        {
          imgSrc: '/img/assurance.png',
          title: 'Quality assurance',
          description:
            'Worldwide delivery on all. Authoritatively morph next-generation innovation with extensive models.',
        },
      ]

    return (
      <section id="promo">
        <div className="container">
          <div className="promo-box">
            <img src="/img/promo.png" alt="Promo" />
            <img src="/img/promo_layer.png" alt="Promo Layer" />
            <div className="txt-box">
              <h2>
                30% <span>OFFER</span>
              </h2>
              <p>FOR WOMEN</p>
            </div>
          </div>
  
          <div className="delivery">
            {promoItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="img-box">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="txt-box">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Promo;
