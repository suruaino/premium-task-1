import LetsTalk from "@/components/Lets-talk/LetsTalk";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../../components/buttons/button-2/Button";

// interface Product {
//   title: string;
//   // Add other properties as needed
// }

const Locations = () => {
  return (
    <div className="places flex flex-col gap-10 md:gap-20">
      <section className="canada w-full md:max-w-[90%] lg:max-w-[80%] h-[676px] lg:h-[326px] flex flex-col lg:flex-row justify-between self-center md:gap-6">
        <div
          className={`content-box text-center md:text-left w-full lg:w-[67%] h-[50%] lg:h-full px-[8%] flex flex-col justify-center gap-5 md:rounded-2xl order-2 lg:order-1 ${styles.locations}`}>
          <h2 className="text-[#E7816B] text-[40px] font-medium">Canada</h2>
          <div className="content flex flex-col md:flex-row gap-6 md:gap-24">
            <div className="left">
              <h5>
                <b>Designo Central Office</b>
              </h5>
              <p>
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="right">
              <h5>
                <b>Contact</b>
              </h5>
              <p>
                P : +1 253-863-8967 <br />M : contact@designo.co
              </p>
            </div>
          </div>
        </div>
        <div className="img-box w-full lg:w-[31%] h-[50%] lg:h-full relative md:rounded-2xl overflow-hidden lg:order-2">
          <Image
            src="/assets/locations/desktop/image-map-canada.png"
            layout="fill"
            objectFit="cover"
            alt="About Hero Image"
          />
        </div>
      </section>

      <section className="australia w-full md:max-w-[90%] lg:max-w-[80%] h-[676px] lg:h-[326px] flex flex-col lg:flex-row justify-between self-center md:gap-6">
        <div
          className={`content-box text-center md:text-left w-full lg:w-[67%] h-[50%] lg:h-full px-[8%] flex flex-col justify-center gap-5 md:rounded-2xl order-2  ${styles.locations}`}>
          <h2 className="text-[#E7816B] text-[40px] font-medium">Australia</h2>
          <div className="content flex flex-col md:flex-row gap-6 md:gap-24">
            <div className="left">
              <h5>
                <b>Designo AU Office</b>
              </h5>
              <p>
              19 Balonne Street<br />
              New South Wales 2443 
              </p>
            </div>
            <div className="right">
              <h5>
                <b>Contact</b>
              </h5>
              <p>
              P : (02) 6720 9092 <br /> M : contact@designo.au
              </p>
            </div>
          </div>
        </div>
        <div className="img-box w-full lg:w-[31%] h-[50%] lg:h-full relative md:rounded-2xl overflow-hidden lg:order-1">
          <Image
            src="/assets/locations/desktop/image-map-canada.png"
            layout="fill"
            objectFit="cover"
            alt="About Hero Image"
          />
        </div>
      </section>

      <section className="unitedKingdom w-full md:max-w-[90%] lg:max-w-[80%] h-[676px] lg:h-[326px] mb-10 md:mb-0 flex flex-col lg:flex-row justify-between self-center md:gap-6">
        <div
          className={`content-box text-center md:text-left w-full lg:w-[67%] h-[50%] lg:h-full px-[8%] flex flex-col justify-center gap-5 md:rounded-2xl order-2 lg:order-1 ${styles.locations}`}>
          <h2 className="text-[#E7816B] text-[40px] font-medium">United Kingdom</h2>
          <div className="content flex flex-col md:flex-row gap-6 md:gap-24">
            <div className="left">
              <h5>
                <b>Designo UK Office</b>
              </h5>
              <p>
              13  Colorado Way <br />
                Rhyd-y-fro SA8 9GA
              </p>
            </div>
            <div className="right">
              <h5>
                <b>Contact</b>
              </h5>
              <p>
              P : 078 3115 1400 <br />M : contact@designo.uk
              </p>
            </div>
          </div>
        </div>
        <div className="img-box w-full lg:w-[31%] h-[50%] lg:h-full relative md:rounded-2xl overflow-hidden lg:order-2">
          <Image
            src="/assets/locations/desktop/image-map-canada.png"
            layout="fill"
            objectFit="cover"
            alt="About Hero Image"
          />
        </div>
      </section>

      <LetsTalk />
    </div>
  );
};
export default Locations;
