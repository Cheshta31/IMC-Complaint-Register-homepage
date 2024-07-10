import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          //transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full mt-10 flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
/*
const sliderData = [
  {
    img: "/pushyamitra_bargav.png",
    title:"Narendra Modi Ji",
    location: "Prime Minister, Govt. of Indore",
    description: `- "Our city has achieved unparalleled successes which are the result of your hard work and collective effort"`,
      
  },
  {
    img: "/modi.png",
    title: "Shivam Verma Ji",
    description:
      `- "People say Indore is a city, I say Indore is an era. It is an era that moves ahead of time.Yet still holds the essence."`,
    location: "Commissioner , IMC(Indore Municipal Corporation) Indore",
  },
  {
    img: "/ShivamVerma.png",
    title: "Mohan Yadav Ji",
    description:
      `- "Indore is the pride of our state and your contributions to its development is incomparable."`,
    location: "Chief Minister , Govt. of Madhya Pradesh",
  },
  {
    img: "/MohanYadav.png",
    title: "Asheesh Singh Ji",
    description:
          `- "Indore is the pride of our state and your contributions to its development is incomparable."`,
    location: "Collector , Indore",
  },
  {
    img: "/AshishSingh.png",
    title: "Pushyamitra Bargava Ji",
    description:
    `- "In Indore, our dedication is towards developing our city in sustainable way that is eco-friendly and resilient to future challenges. This means promoting cleanliness, renewable energy, reducing carbon emissions, and creating green spaces that benefit both the environment and the community."`,
    location: "Mayor , Govt. Of Indore",
  },
];
*/
//const initData = sliderData[0];
