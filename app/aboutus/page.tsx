// import WebDesign from "@/components/web-design/WebDesign";
import LetsTalk from "@/components/Lets-talk/LetsTalk";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../../components/buttons/button-2/Button";

// interface Product {
//   title: string;
//   // Add other properties as needed
// }

const AboutPage = () => {
  return (
    <div className="about flex flex-col md:gap-20">
      <section
        className={`about-hero text-white text-center md:text-start w-full md:max-w-[80%] h-[715px] md:h-[480px] flex flex-col md:flex-row justify-center items-center self-center gap-2 md:rounded-2xl overflow-hidden ${styles.aboutPage}`}
      >
        <div className="left w-full h-[60%] md:h-full md:w-[60%] px-5 md:px-24 flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-[32px] md:text-[48px]">About Us</h2>
          <p className="text-[15px] md:text-[16px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>

        <div className="right w-full md:w-[40%] h-[40%] md:h-full relative md:order-2">
          <Image
            src="/assets/about/desktop/image-about-hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="About Hero Image"
          />
        </div>
      </section>

      <section
        className={`world-class-talent text-center md:text-start w-full md:max-w-[80%] h-[715px] md:h-[640px] flex flex-col md:flex-row justify-center items-center self-center gap-2 md:rounded-2xl overflow-hidden ${styles.aboutPageTalent}`}
      >
        <div className="left w-full h-[60%] md:h-full md:w-[60%] px-5 md:px-24 flex flex-col justify-center order-2">
          <h2 className="text-[32px] md:text-[48px] text-[#E7816B]">World-class talent</h2>
          <p className={`text-[15px] md:text-[16px]`}>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br />
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>

        <div className="right w-full md:w-[40%] h-[40%] md:h-full relative order-1">
          <Image
            src="/assets/about/desktop/image-world-class-talent.jpg"
            layout="fill"
            objectFit="cover"
            alt="About Hero Image"
          />
        </div>
      </section>

      <section className="places w-full max-w-[80%] py-20 md:py-0 flex flex-col md:flex-row justify-between self-center gap-[48px]">
        <div className="passionate w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
          <div
            className="img-box"
            style={{
              backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "rotate(0deg)",
            }}
          >
            <Image
              src="/assets/shared/desktop/illustration-canada.svg"
              width={188}
              height={162}
              alt="arrow icon"
              style={{
                transform: "rotate(0deg)",
              }}
            />
          </div>
          <h1 className="text-[20px] font-semibold tracking-[4px]">CANADA</h1>
          <Button value="SEE LOCATION" />
        </div>

        <div className="resource w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
          <div
            className="img-box"
            style={{
              backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "rotate(-90deg)",
            }}
          >
            <Image
              src="/assets/shared/desktop/illustration-australia.svg"
              width={188}
              height={162}
              alt="arrow icon"
              style={{
                transform: "rotate(90deg)",
              }}
            />
          </div>
          <h1 className="text-[20px] font-semibold tracking-[4px]">
            AUSTRALIA
          </h1>
          <Button value="SEE LOCATION" />
        </div>

        <div className="friendly w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
          <div
            className="img-box"
            style={{
              backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "rotate(180deg)",
            }}
          >
            <Image
              src="/assets/shared/desktop/illustration-united-kingdom.svg"
              width={188}
              height={162}
              alt="arrow icon"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </div>
          <h1 className="text-[20px] font-semibold tracking-[4px]">
            UNITED KINGDOM
          </h1>
          <Button value="SEE LOCATION" />
        </div>
      </section>

      <section
        className={`world-the-real text-center md:text-start w-full md:max-w-[80%] h-[715px] md:h-[640px] mb-20 md:mb-0 flex flex-col md:flex-row justify-center items-center self-center gap-2 md:rounded-2xl overflow-hidden ${styles.aboutPageTheReal}`}
      >
        <div className="left w-full h-[60%] md:h-full md:w-[60%] px-5 md:px-24 flex flex-col justify-center order-2">
          <h2 className="text-[32px] md:text-[48px] text-[#E7816B]">The real deal</h2>
          <p className={`text-[15px] md:text-[16px]`}>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success
            <br />
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>

        <div className="right w-full md:w-[40%] h-[40%] md:h-full relative order-1">
          <Image
            src="/assets/about/desktop/image-real-deal.jpg"
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
export default AboutPage;
