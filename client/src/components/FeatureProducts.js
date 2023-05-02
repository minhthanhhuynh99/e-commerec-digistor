import React, { useEffect, useState } from "react";
import { ProductCart } from "./";
import { apiGetProducts } from "../apis";
import view_1 from "../assets/view1.webp";
import view_2 from "../assets/view2.avif";
import view_3 from "../assets/view3.avif";
import view_4 from "../assets/view4.webp";

const FeatureProducts = () => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const response = await apiGetProducts({
      limit: 9,
      totalRatings: 5,
    });
    if (response.success) setProducts(response.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main">
        FEATURE PRODUCTS
      </h3>
      <div className="flex flex-wrap mt-[15px] mx-[-10px]">
        {products?.map((el) => (
          <ProductCart
            key={el._id}
            thumb={el.thumb}
            title={el.title}
            totalRatings={el.totalRatings}
            price={el.price}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <img src={view_1} alt="view_1" className="w-[49%] object-contain" />
        <div className="flex flex-col justify-between w-[24%] gap-4">
          <img src={view_2} alt="view_2" />
          <img src={view_3} alt="view_3" />
        </div>
        <img src={view_4} alt="view_4" className="w-[24%] object-contain" />
      </div>
    </div>
  );
};

export default FeatureProducts;
