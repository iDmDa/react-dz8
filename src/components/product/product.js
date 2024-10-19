import HeaderMenu from "../common/HeaderMenu";
import HeaderTop from "../common/HeaderTop";
import Footer from '../common/Footer';
import CatalogSection from "./CatalogSection";
import ProductFilter from "./productFilter";
import ProductList from "./productList";


function ProductPage() {
  return (
    <>
      <header id="header">
        <HeaderTop />
        <HeaderMenu />
      </header>
      <main>
        <div class="all-products">
          <CatalogSection />
          <ProductFilter />
          <ProductList />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;