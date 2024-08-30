"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../../components/buttons/button-1/Button";

const Contact = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);

  useEffect(() => {
    if (name === '') {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (phone === '') {
      setPhoneError(true);
    } else {
      setPhoneError(false)
    }
    if (message === '') {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  }, [name, email, phone, message]);

  const handleNameChange = (e: any)=> {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <div className="about text-white flex flex-col md:gap-20">
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
            <div id="name" className="name relative">
              <input
                type="text"
                onChange={handleNameChange}
                placeholder="Name"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              {nameError &&
              <label id="name-error" className="text-[12px] text-white flex justify-between items-center gap-2 absolute right-0 bottom-2">Can't be empty
              <span>
                  <Image 
                    src="/assets/contact/desktop/icon-error.svg"
                    width={15}
                    height={15}
                    alt="Error Icon"
                  />
                </span>
              </label>
              }
            </div>
            <div id="email" className="email relative">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              {emailError &&
              <label id="email-error" className="text-[12px] text-white flex justify-between items-center gap-2 absolute right-0 bottom-2">Can't be empty 
                <span>
                  <Image 
                    src="/assets/contact/desktop/icon-error.svg"
                    width={15}
                    height={15}
                    alt="Error Icon"
                  />
                </span>
              
              </label>
} 
            </div>
            <div id="phone" className="phone relative">
              <input
              type="text"
              onChange={handlePhoneChange}
                placeholder="Phone"
                className="text-[15px] bg-transparent w-full px-4 py-2 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              />
              {phoneError &&
              <label id="phone-error" className="text-[12px] text-white flex justify-between items-center gap-2 absolute right-0 bottom-2">Can't be empty
              <span>
                  <Image 
                    src="/assets/contact/desktop/icon-error.svg"
                    width={15}
                    height={15}
                    alt="Error Icon"
                  />
                </span>
              </label>
}
            </div>
            <div id="message" className="message relative">
              <textarea
                onChange={handleMessageChange}
                value={message}
                placeholder="Your Message"
                className="text-[15px] bg-transparent w-full px-4 py-2 pb-10 border-0 border-b-[1px] placeholder:text-[#ffffff96]"
              ></textarea>
              {messageError &&
              <label id="message-error"className="text-[12px] text-white flex justify-between items-center gap-2 absolute right-0 top-3">Can't be empty
              <span>
                  <Image 
                    src="/assets/contact/desktop/icon-error.svg"
                    width={15}
                    height={15}
                    alt="Error Icon"
                  />
                </span>
              </label>
}
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
