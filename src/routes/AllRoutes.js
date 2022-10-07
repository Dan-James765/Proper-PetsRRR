import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cats from "../components/CatsFolder/Cats";
import Dogs from "../components/DogsFolder/Dogs";
import Footer from "../components/Header-FooterFLD/Footer";
import Header from "../components/Header-FooterFLD/Header";
import HomeImageCarousel from "../components/HomeBody/HomeImageCarousel";
import HomeImageGallery from "../components/HomeBody/HomeImageGallery";
import Login from "../components/LoginFolder/Login";
import ResetPassword from "../components/LoginFolder/ResetPassword";
import Signup from "../components/LoginFolder/Signup";
import Sale from "../components/SaleFolder/Sale";

function AllRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="h-screen">
                  <Header />
                  <main className="xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:max-w-screen-xs mx-auto ">
                    <HomeImageCarousel />
                    <HomeImageGallery />
                  </main>
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/dogs"
            element={
              <>
                <Dogs />
              </>
            }
          ></Route>
          <Route
            path="/cats"
            element={
              <>
                <Cats />
              </>
            }
          ></Route>
          <Route
            path="/sale"
            element={
              <>
                <Sale />
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/reset-password"
            element={
              <>
                <ResetPassword />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AllRoutes;
