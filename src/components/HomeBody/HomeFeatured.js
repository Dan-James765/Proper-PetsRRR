import React from "react";

function HomeFeatured({
  slug,
  imageMain,
  productHeadline,
  onSalePrice,
  outOfStock,
}) {
  return (
    <div
      key={slug}
      className="xl:w-72 lg:w-48 xs:w-60  transition ease-in-out delay-110  hover:-translate-y-1 hover:scale-105 duration-200 "
    >
      <div className="rounded overflow-hidden shadow-lg ">
        <a href={`/product/${slug}`}>
          <img alt="" className="w-full" src={imageMain} />
        </a>
        <div className="px-6 py-4">
          <div className="flex justify-center">
            <a href={`/product/${slug}`}>
              <h1 className="font-bold text-sm mb-2">{productHeadline}</h1>
            </a>
          </div>
          <div className="flex justify-center text-gray-500 font-medium">
            <h1>{onSalePrice}</h1>
          </div>
          <div className="flex justify-center">
            <button
              disabled={outOfStock}
              className={`rounded-full xl:px-10 xl:py-2 lg:px-3 lg:py-1 xs:px-10 xs:py-2 font-semibold xl:text-base lg:text-sm xs:text-base ${
                outOfStock
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
  );
}

export default HomeFeatured;
