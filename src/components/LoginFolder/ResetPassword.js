import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { toast } from "react-toastify";
import { Triangle } from "react-loader-spinner";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for the reset link!");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="flex justify-center 2xl:pt-10 xl:pt-10 lg:pt-6 xs:pt-10">
        <div className=" 2xl:w-96 xl:w-96 lg:w-96 sm:p-6">
          <form onSubmit={resetPassword} className="space-y-6" action="#">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
              Reset Password
            </h3>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="hover:bg-slate-100 cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white focus:outline-gray-400"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 w-full"
            >
              Reset Password
            </button>
            <div className="flex justify-start ">
              <Link to="/login">
                <div className="flex items-center space-x-1 text-blue-700 hover:underline dark:text-blue-500 cursor-pointer">
                  <BiArrowBack className="ml-auto text-sm " />
                  <h1 className="ml-auto text-sm ">Back to Login</h1>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {isLoading && (
        <Triangle
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
}

export default ResetPassword;
