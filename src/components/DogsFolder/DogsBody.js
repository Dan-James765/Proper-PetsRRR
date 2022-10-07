import React from "react";
import data from "../../utils/db";

function DogsBody() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-6 xl:w-full py-10">
          {data.products.map((mapper) => (
            <>
              {mapper.forDogs === true ? (
                <div
                  className="xl:w-60 lg:w-52 xs:w-60 transition ease-in-out delay-110  hover:-translate-y-1 hover:scale-105 duration-200 pb-6 "
                  key={mapper.slug}
                >
                  <div className="rounded overflow-hidden shadow-lg">
                    <a href={`/product/${mapper.slug}`}>
                      <img
                        className="w-full h-full"
                        src={mapper.imageMain}
                        alt=""
                      />
                    </a>
                    <div className="px-6 py-4">
                      <div className="flex justify-center">
                        <a href={`/product/${mapper.slug}`}>
                          <h1 className="font-bold  lg:text-base xs:text-sm mb-2 ">
                            {mapper.productHeadline}
                          </h1>
                        </a>
                      </div>
                      <div className="flex justify-center text-gray-500 font-medium">
                        {mapper.onSale ? (
                          <span className="">{mapper.onSalePrice}</span>
                        ) : (
                          <span className="">{mapper.price}</span>
                        )}
                      </div>
                      <p className="text-gray-700 text-base   xs:line-clamp-2">
                        {mapper.description}
                      </p>
                      <div className="flex justify-center">
                        <button
                          disabled={mapper.outOfStock}
                          className={`rounded-full xl:px-10 xl:py-2 lg:px-6 lg:py-1 xs:px-10 xs:py-2 font-semibold ${
                            mapper.outOfStock
                              ? "bg-gray-900 opacity-75  text-white "
                              : " bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900"
                          }`}
                        >
                          Add to Basket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default DogsBody;
