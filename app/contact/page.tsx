// import WebDesign from "@/components/web-design/WebDesign";
import LetsTalk from "@/components/Lets-talk/LetsTalk";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../../components/buttons/button-1/Button";

// interface Product {
//   title: string;
//   // Add other properties as needed
// }

const Contact = () => {
  return (
    <div className="about flex flex-col md:gap-20">
      <section
        className={`about-hero text-center md:text-start w-full md:max-w-[80%] h-[764px] lg:h-[480px] flex flex-col lg:flex-row justify-center items-center self-center gap-10 md:rounded-2xl overflow-hidden ${styles.contactPage}`}
      >
        <div className="left w-full md:max-w-[85%] lg:max-w-[55%] lg:h-full lg:w-[55%] lg:pl-24 flex flex-col justify-center items-center md:items-start gap-4 md:order-1">
          <h2 className="text-[32px] md:text-[48px]">Contact Us</h2>
          <p className="text-[15px] md:text-[16px] lg:max-w-[450px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div className="right w-full max-w-[90%] md:max-w-[85%] lg:max-w-[45%]  lg:h-full flex justify-center items-center md:order-2">
          <form action="" className="w-full lg:mr-20 flex flex-col gap-4">
            <div id="name" className="name">
              <input
                placeholder="Name"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              <label id="name-error"></label>
            </div>
            <div id="email" className="email">
              <input
                placeholder="Email Address"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              <label id="email-error"></label>
            </div>
            <div id="phone" className="phone">
              <input
                placeholder="Phone"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              <label id="phone-error"></label>
            </div>
            <div id="email" className="email">
              <textarea
                placeholder="Your Message"
                className="text-[15px] bg-transparent w-full px-4 py-2 pb-10 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              ></textarea>
              <label id="message-error"></label>
            </div>
            <div className="btn-box w-full flex justify-end">
            <Button value="SUBMIT" />
            </div>
            
          </form>
        </div>
      </section>

      <section className="places w-full max-w-[80%] py-20 md:py-0 md:pb-20 flex flex-col md:flex-row justify-between self-center gap-[48px]">
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

      {/* <LetsTalk /> */}
    </div>
  );
};
export default Contact;
