import React from "react";
import { motion } from "framer-motion";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
  return (
    /*
    <motion.div
      className=" relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[208px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
        },
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <motion.img
        layoutId={data.img}
        alt="Transition Image"
        src={data.img}
        className=" absolute h-full w-full  rounded-2xl  object-cover brightness-75 "
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=" mb-2 h-[2px] w-3 rounded-full"
          ></motion.div>
          <motion.p layoutId={data.title} className="text-md text-black ">
            {data.title}
          </motion.p>
          <motion.p
            layoutId={data.location}
            className="text-lg leading-6 text-white"
          >
            {data.location}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
    */
   <div></div>
  );
}

export default SliderCard;
