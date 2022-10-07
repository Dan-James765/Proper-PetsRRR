import Footer from "../Header-FooterFLD/Footer";
import Header from "../Header-FooterFLD/Header";
import DogsBody from "./DogsBody";

function Dogs() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <main className="md:max-w-screen-xl  mx-auto">
          <DogsBody />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Dogs;
