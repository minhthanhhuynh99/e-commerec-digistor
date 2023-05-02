import React, { useState } from "react";
import { formatMoney } from "../ultils/helper";
import label_new from "../assets/new.png";
import label_trending from "../assets/trending.png";
import { renderStarFromNumber } from "../ultils/helper";
import { SelectOption } from "./";
import icons from "../ultils/icons";

const { AiFillEye, AiFillHeart, BiMenu } = icons;

const Product = ({ productData, isNew }) => {
  const [isShowOption, setIsShowOption] = useState(false);

  return (
    <div className="w-full text-base px-[10px]">
      <div
        className="w-full border p-[15px] flex flex-col items-center"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setIsShowOption(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setIsShowOption(false);
        }}
      >
        <div className="w-full relative">
          {isShowOption && (
            <div className="absolute bottom-[-10px] left-0 right-0 flex justify-center gap-2 animate-slide-top">
              <SelectOption icon={<AiFillHeart />} />
              <SelectOption icon={<BiMenu />} />
              <SelectOption icon={<AiFillEye />} />
            </div>
          )}
          <img
            src={
              productData?.thumb ||
              "https://www.pcbshop.org/en/mobile/images/default.jpg"
            }
            alt=""
            className="w-[274px] h-[274px] object-cover"
          />
          <img
            src={isNew ? label_new : label_trending}
            alt=""
            className={`absolute w-[100px] h-[35px] top-0 right-0 object-cover`}
          />
        </div>
        <div className="flex flex-col gap-1 mt-[15px] items-start w-full ">
          <span className="flex h-4">
            {renderStarFromNumber(productData?.totalRatings)?.map(
              (el, index) => (
                <span key={index}>{el}</span>
              )
            )}
          </span>
          <span className="line-clamp-1">{productData?.title}</span>
          <span>{`${formatMoney(productData?.price)} VNĐ`}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
