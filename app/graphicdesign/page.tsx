import Image from "next/image";
import Link from "next/link";
import LetsTalk from "@/components/Lets-talk/LetsTalk";
import styles from "./styles.module.css";

const GraphicDesign = () => {
  return (
    <div className="graphicdesign text-white flex flex-col gap-20">
      <div
        className={`page-header text-center w-[90%] md:max-w-[80%] h-[252px] flex flex-col justify-center items-center self-center gap-2 rounded-2xl ${styles.graphicdesign}`}
      >
        <h2 className="text-[48px]">Graphic Design</h2>
        <p className="max-w-[400px]">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>

      <div className="card-container w-[90%] md:max-w-[80%] mt-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 self-center">
        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/graphic-design/desktop/image-change.jpg"
              layout="fill"
              objectFit="cover"
              alt="express image"
            />
          </div>
          <div
            className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
            style={{}}
          >
            <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">
              TIM BROWN
            </h2>
            <p className="max-w-[80%]">
              A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/graphic-design/desktop/image-boxed-water.jpg"
              layout="fill"
              objectFit="cover"
              alt="express image"
            />
          </div>
          <div
            className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
            style={{}}
          >
            <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">
              BOXED WATER
            </h2>
            <p className="max-w-[80%]">
              A simple packaging concept made for Boxed Wate
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/graphic-design/desktop/image-science.jpg"
              layout="fill"
              objectFit="cover"
              alt="express image"
            />
          </div>
          <div
            className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
            style={{}}
          >
            <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">
              SCIENCE
            </h2>
            <p className="max-w-[80%]">
              A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </div>
      </div>

      <div className="nav-to-other-pages w-full max-w-[80%] h-[524px] md:h-[308px] flex flex-col md:flex-row self-center gap-6">
        <Link
          href="/appdesign"
          className="group w-full h-[250px] md:h-full flex flex-col justify-center items-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/assets/home/desktop/image-app-design.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
          <h2 className="text-[28px] md:text-[40px] z-50">APP DESIGN</h2>
          <p className="font-medium flex items-center gap-4 z-50">
            VIEW PROJECT
            <span>
              <Image
                src="/assets/shared/desktop/icon-right-arrow.svg"
                width={8}
                height={8}
                alt="arrow icon"
              />
            </span>
          </p>
        </Link>
        <Link
          href="webdesign"
          className="group w-full h-[250px] md:h-full  flex flex-col justify-center items-center rounded-2xl relative"
          style={{
            backgroundImage: `url(/assets/home/desktop/image-graphic-design.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
          <h2 className="text-[28px] md:text-[40px] z-50">WEB DESIGN</h2>
          <p className="font-medium flex items-center gap-4 z-50">
            VIEW PROJECT
            <span>
              <Image
                src="/assets/shared/desktop/icon-right-arrow.svg"
                width={8}
                height={8}
                alt="arrow icon"
              />
            </span>
          </p>
        </Link>
      </div>

      <LetsTalk />
    </div>
  );
};

export default GraphicDesign;
