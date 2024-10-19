import HeaderMenu from "../common/HeaderMenu";
import HeaderTop from "../common/HeaderTop";
import Category from './Category';
import FeaturedItems from './FeaturedItems';
import Promo from './Promo';
import Footer from '../common/Footer';
import HeaderBiglogo from "./HeaderBiglogo";

function MainPage() {
    return (
      <>
        <header id="header">
            <HeaderTop />
            <HeaderMenu />
            <HeaderBiglogo />
        </header>
        <main>
          <Category />
          <FeaturedItems />
          <Promo />
        </main>
        <Footer />
      </>
    );
  }
  
  export default MainPage;