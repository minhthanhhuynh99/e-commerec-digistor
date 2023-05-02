import React from "react";
import { CustomSlider } from "./";
import { useSelector } from "react-redux";

const NewArrivals = () => {
  const { newProducts } = useSelector((state) => state.products);
  return (
    <div>
      <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main">
        New Arrivals
      </h3>
      <div className=" mt-4 mx-[-10px] pt-4">
        <CustomSlider products={newProducts} />
      </div>
    </div>
  );
};

export default NewArrivals;
