import Footer from "../Header-FooterFLD/Footer";
import Header from "../Header-FooterFLD/Header";
import CatsBody from "./CatsBody";

function Cats() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <main className="md:max-w-screen-xl  mx-auto">
          <CatsBody />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Cats;
