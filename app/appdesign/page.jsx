import Image from "next/image";
import Link from "next/link";
import LetsTalk from "@/components/Lets-talk/LetsTalk";
import styles from "./styles.module.css";

const AppDesign = () => {
  return (
    <div className="appdesign text-white flex flex-col gap-20">
      <div
        className={`page-header text-center w-[90%] md:max-w-[80%] h-[252px] flex flex-col justify-center items-center self-center gap-2 rounded-2xl ${styles.appdesign}`}
      >
        <h2 className="text-[48px]">App Design</h2>
        <p className="max-w-[400px]">
        Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips.
        </p>
      </div>

      <div className="card-container w-[90%] md:max-w-[80%] mt-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 self-center">
        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/app-design/desktop/image-airfilter.jpg"
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
              AIRFILTER
            </h2>
            <p className="max-w-[80%]">
            Solving the problem of poor indoor air quality by filtering the air
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/app-design/desktop/image-eyecam.jpg"
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
              EYECAM
            </h2>
            <p className="max-w-[80%]">
            Product that lets you edit your favorite photos and videos at any time
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/app-design/desktop/image-faceit.jpg"
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
              FACEIT
            </h2>
            <p className="max-w-[80%]">
            Get to meet your favorite internet superstar with the faceit app
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/app-design/desktop/image-todo.jpg"
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
              TODO
            </h2>
            <p className="max-w-[80%]">
            A todo app that features cloud sync with light and dark mode
            </p>
          </div>
        </div>

        <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
          <div className="img-bx w-full h-[320px] relative">
            <Image
              src="/assets/app-design/desktop/image-loopstudios.jpg"
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
              LOOPSTUDIOS
            </h2>
            <p className="max-w-[80%]">
            A VR experience app made for Loopstudios
            </p>
          </div>
        </div>
      </div>

      <div className="nav-to-other-pages w-full max-w-[80%] h-[524px] md:h-[308px] flex flex-col md:flex-row self-center gap-6">
          <Link
            href="/webdesign"
            className="group w-full h-[250px] md:h-full flex flex-col justify-center items-center rounded-2xl relative"
            style={{
              backgroundImage: `url(/assets/home/desktop/image-app-design.jpg)`,
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
          <Link
            href="graphicdesign"
            className="group w-full h-[250px] md:h-full  flex flex-col justify-center items-center rounded-2xl relative"
            style={{
              backgroundImage: `url(/assets/home/desktop/image-graphic-design.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
            <h2 className="text-[28px] md:text-[40px] z-50">GRAPHIC DESIGN</h2>
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

export default AppDesign;
