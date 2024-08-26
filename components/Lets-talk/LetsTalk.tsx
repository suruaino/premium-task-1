// import Image from "next/image";
// import Link from "next/link";
import Button from "../buttons/button-1/Button";
import styles from "./styles.module.css";

const LetsTalk = () => {
  return (
    <section className={`w-full max-w-[90%] md:max-w-[80%] md:h-[292px] text-center md:text-left md:px-20 flex py-12 flex-col md:flex-row md:justify-between items-center rounded-2xl gap-4 md:gap-0  ${styles.letsTalk}`}>
      <div className="content max-w-[90%] md:max-w-[60%] flex flex-col items-center md:items-start gap-4 ">
        <h2 className="max-w-60 md:max-w-72 leading-10 text-[32px] md:text-[40px] font-medium">Let's talk about your project</h2>
        <p className="w-full md:max-w-[460px] text-[16px]">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button value="GET IN TOUCH" />
    </section>
  );
};

export default LetsTalk;