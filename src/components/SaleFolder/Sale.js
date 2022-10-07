import Footer from "../Header-FooterFLD/Footer";
import Header from "../Header-FooterFLD/Header";
import SaleBody from "./SaleBody";

function Sale() {
  return (
    <div className="h-screen">
      <Header />
      <main className="md:max-w-screen-xl  mx-auto">
        <SaleBody />
      </main>
      <Footer />
    </div>
  );
}

export default Sale;
