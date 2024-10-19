import HeaderMenu from "../common/HeaderMenu";
import HeaderTop from "../common/HeaderTop";
import Footer from '../common/Footer';
import ShoppingCart from "./shopCart";

function ShopPage() {
    return (
      <>
        <header id="header">
            <HeaderTop />
            <HeaderMenu />
        </header>
        <ShoppingCart />
        <Footer />
      </>
    );
  }
  
  export default ShopPage;