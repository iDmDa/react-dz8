const HeaderMenuItem = ({ title, items }) => {
    return (
      <>
        <ul>
          <h3>{title}</h3>
          {items.map((item, index) => (
            <li key={index}><a href={`/product`}>{item}</a></li>
          ))}
        </ul>
      </>
    );
  };
  
  const HeaderMenuBlock = ({ title, title1, items1, items2, items3, items4 }) => {
    return (
      <li className="menu-item">
        <h2>{title}</h2>
        <div className="MegaMenu">
          <div className="column">
            <HeaderMenuItem title={title1} items={items1} />
          </div>
  
          <div className="column">
            <HeaderMenuItem title={title1} items={items2} />
            <HeaderMenuItem title={title1} items={items3} />
          </div>
  
          <div className="column">
            <HeaderMenuItem title={title1} items={items4} />
            <img src="/img/menu_pic.png" alt="" />
          </div>
  
        </div>
      </li>
    );
  }
  
  
  const HeaderMenu = () => {
  
    const womenItems = [
      "Dresses",
      "Tops",
      "Sweaters/Knits",
      "Jackets/Coats",
      "Blazers",
      "Denim",
      "Leggings/Pants",
      "Skirts/Shorts",
      "Accessories"
    ];
  
    const womenItems2 = [
      "Dresses",
      "Tops",
      "Sweaters/Knits",
      "Jackets/Coats"
    ];
  
    const womenItems3 = [
      "Dresses",
      "Tops",
      "Sweaters/Knits"
    ];
    
    return (
      <section id="header-menulayer">
        <ul>
          <HeaderMenuBlock title="HOME" title1="WOMEN" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Man" title1="Man" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Women" title1="Women" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Kids" title1="Kids" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Accoseriese" title1="Accoseriese" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Featured" title1="Featured" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
          <HeaderMenuBlock title="Hot Deals" title1="Hot Deals" items1={womenItems} items2={womenItems2} items3={womenItems3} items4={womenItems2}/>
        </ul>
      </section>
    );
  }

  export default HeaderMenu;