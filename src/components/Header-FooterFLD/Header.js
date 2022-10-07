// import React, { useEffect, useState } from "react";
import { MdPets } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";

function Header() {
  // const [displayName, setDisplayName] = useState("");

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log(user.displayName);
  //       setDisplayName(user.displayName);
  //     } else {
  //       setDisplayName("");
  //     }
  //   });
  // }, [displayName]);

  const navigate = useNavigate();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Succesful!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="flex items justify-evenly p-1 flex-grow py-3 shadow-sm">
        <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <p className="lg:flex xs:hidden ">
            FREE NEXT-DAY DELIVERY FOR ORDERS OVER £100
          </p>
          {auth ? (
            //This should actually be a user
            <>
              <p
                onClick={logoutUser}
                className="xs:flex lg:hidden md:text-sm hover:underline cursor-pointer uppercase"
              >
                LOGOUT
              </p>
            </>
          ) : (
            <>
              <Link to="/login">
                <p className="xs:flex lg:hidden text-xs hover:underline cursor-pointer uppercase">
                  SIGN IN
                </p>
              </Link>
            </>
          )}
        </div>

        <a href="/">
          <div className="mt-2 flex flex-col items-center flex-grow sm:flex-grow-0 text-black">
            <MdPets />
          </div>
        </a>
        <div className="text-black flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          {auth ? (
            <>
              <p
                onClick={logoutUser}
                className="xs:hidden lg:flex md:text-sm hover:underline cursor-pointer uppercase"
              >
                LOGOUT
              </p>
            </>
          ) : (
            <>
              <Link to="/login">
                <p className="xs:hidden lg:flex text-xs hover:underline cursor-pointer uppercase">
                  SIGN IN
                </p>
              </Link>
            </>
          )}

          <a href="/orders">
            <p className="md:text-sm hover:underline cursor-pointer">ORDERS</p>
          </a>
          <p className="md:text-sm xs:flex lg:hidden hover:underline cursor-pointer">
            BASKET
          </p>
          <div className="xs:hidden lg:flex relative cursor-pointer flex items-center hover:underline">
            <p className="md:text-sm">BASKET</p>
            <span className="absolute top-0 left-0 md:left-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <HiShoppingCart className="h-10 text-xl lg:flex xs:hidden" />
          </div>
          <AiOutlineSearch className="h-10 text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-evenly p-1 flex-grow py-3">
        <a href="/dogs">
          <h1 className="text-base  cursor-pointer text-gray-500 font-medium">
            DOGS
          </h1>
        </a>
        <a href="/cats">
          <h1 className="text-base  cursor-pointer text-gray-500 font-medium">
            CATS
          </h1>
        </a>
        <a href="/sale">
          <h1 className="text-base  cursor-pointer text-gray-500 font-medium">
            SALE
          </h1>
        </a>
      </div>
    </>
  );
}

export default Header;
