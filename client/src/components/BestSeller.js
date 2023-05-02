import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../apis/product";
import { CustomSlider } from "./";
import banner_1 from "../assets/img1.avif";
import banner_2 from "../assets/img2.avif";
import { getNewProducts } from "../store/products/asyncAction";
import { useDispatch, useSelector } from "react-redux";

const tab = [
  { id: 1, name: "best seller" },
  { id: 2, name: "new arrivals" },
  // { id: 3, name: "tablet" },
];

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState(null);
  const [activedTab, setActivedTab] = useState(1);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const { newProducts } = useSelector((state) => state.products);

  const fetchProducts = async () => {
    const response = await apiGetProducts({ sort: "-sole" });
    if (response?.success) {
      setBestSeller(response.products);
      setProducts(response.products);
    }
  };

  useEffect(() => {
    fetchProducts();
    dispatch(getNewProducts());
  }, []);
  useEffect(() => {
    if (activedTab === 1) setProducts(bestSeller);
    if (activedTab === 2) setProducts(newProducts);
  }, [activedTab]);
  return (
    <div>
      <div className="flex text-[20px] ml-[-32px]">
        {tab.map((el) => (
          <span
            key={el.id}
            className={`font-semibold px-8 uppercase cursor-pointer border-r text-gray-400 ${
              activedTab === el.id ? "text-gray-900" : ""
            }`}
            onClick={() => setActivedTab(el.id)}
          >
            {el.name}
          </span>
        ))}
      </div>
      <div className="mt-4 mx-[-10px] border-t-2 border-main pt-4">
        <CustomSlider products={products} activedTab={activedTab} />
      </div>
      <div className="w-full flex gap-4 mt-4">
        <img src={banner_1} alt="banner_1" className="flex-1 object-contain" />
        <img src={banner_2} alt="banner_2" className="flex-1 object-contain" />
      </div>
    </div>
  );
};

export default BestSeller;
