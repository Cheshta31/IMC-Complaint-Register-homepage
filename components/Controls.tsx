import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Progress from "./Progress";
import { CurrentSlideData, Data } from "@/pages";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Data;
};

function Controls({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) {
const handlePrev = () => {   //handle previous data    
handleData((prevData) => [
  transitionData ? transitionData : initData,
  ...prevData.slice(0, prevData.length - 1),
]);
    
handleCurrentSlideData({
  data: transitionData ? transitionData : sliderData[0],
  index: sliderData.findIndex(
    (ele) => ele.img === data[data.length - 1].img
  ),
});
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {   //handle next data
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((ele) => ele.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  return (
    <div>
    </div>
  );
}

export default Controls;

const SliderButton = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) => {
  return (
    <button
      className=" flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300
ease-in-out hover:bg-white hover:text-black
"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
