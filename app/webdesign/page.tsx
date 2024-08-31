// import WebDesign from "@/components/web-design/WebDesign";
import LetsTalk from "@/components/Lets-talk/LetsTalk";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

interface Product {
  title: string;
  // Add other properties as needed
}

const WebDesignPage = () => {
  return (
    <div className="webdesignpage flex flex-col gap-20">
        <div
          className={`page-header text-white text-center w-[90%] md:max-w-[80%] h-[252px] flex flex-col justify-center items-center self-center gap-2 rounded-2xl ${styles.webdesign}`}>

          <h2 className="text-[32px] md:text-[48px]">Web Design</h2>
          <p className="max-w-[95%] md:max-w-[400px]">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>

        <div className="card-contain w-[90%] md:max-w-[80%] mt-16 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 self-center">
          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-express.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">EXPRESS</h2>
              <p className="max-w-[80%]">
                A multi-carrier shipping website for ecommerce businesses
              </p>
            </div>
          </div>

          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-transfer.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">TRANSFER</h2>
              <p className="max-w-[80%]">
                Site for low-cost money transfers and sending money within
                seconds
              </p>
            </div>
          </div>

          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-photon.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">PHOTON</h2>
              <p className="max-w-[80%]">
                A state-of-the-art music player with high-resolution audio and
                DSP effects
              </p>
            </div>
          </div>

          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-builder.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">BUILDER</h2>
              <p className="max-w-[80%]">
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>

          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-blogr.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">BLOGR</h2>
              <p className="max-w-[80%]">
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>

          <div className="card group lg:w-full h-[486px] md:h-[320px] lg:h-[486px] flex flex-col md:flex-row lg:flex-col overflow-hidden rounded-2xl cursor-pointer">
            <div className="img-bx w-full h-[320px] relative">
              <Image
                src="/assets/web-design/desktop/image-camp.jpg"
                layout="fill"
                objectFit="cover"
                alt="express image"
              />
            </div>
            <div
              className="content bg-[#FDF3F0] group-hover:bg-[#E7816B] group-hover:text-[#FFFFFF] text-center w-full h-[33.05%] md:h-full lg:h-[33.05%] flex flex-col items-center justify-center gap-3 rounded-b-2xl sm:rounded-none lg:rounded-b-2xl"
              style={{}}
            >
              <h2 className="text-[20px] text-[#E7816B] group-hover:text-[#FFFFFF]">CAMP</h2>
              <p className="max-w-[80%]">
                Get expert training in coding, data, design, and digital
                marketing
              </p>
            </div>
          </div>
        </div>

        <div className="nav-to-other-pages w-full max-w-[80%] h-[524px] md:h-[308px] flex flex-col md:flex-row self-center gap-4">
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
export default WebDesignPage;
