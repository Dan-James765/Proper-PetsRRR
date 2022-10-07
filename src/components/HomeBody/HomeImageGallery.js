import HomeFeatured from "./HomeFeatured";
import data from "../../utils/db";

function HomeImageGallery() {
  return (
    <>
      <div className="flex flex-row justify-between xl:p-6">
        <h1 className="font-semibold text-xl">ON SALE</h1>
        <a href="/sale">
          <h1 className="underline font-medium">See All</h1>
        </a>
      </div>
      <div className="flex justify-center items-center xl:pl-10">
        <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto xl:w-full py-10 xl:gap-0 xs:gap-6 ">
          {data.products
            .slice(4, 9)
            .map(
              ({
                onSale,
                slug,
                imageMain,
                productHeadline,
                outOfStock,
                onSalePrice,
              }) => (
                <>
                  {onSale === true ? (
                    <HomeFeatured
                      key={slug}
                      slug={slug}
                      imageMain={imageMain}
                      productHeadline={productHeadline}
                      onSalePrice={onSalePrice}
                      outOfStock={outOfStock}
                    />
                  ) : (
                    <></>
                  )}
                </>
              )
            )}
        </div>
      </div>
    </>
  );
}

export default HomeImageGallery;
