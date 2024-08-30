
import Image from "next/image";
import Button from "../buttons/button-1/Button";
import styles from "./styles.module.css";

const Hero = () => {
    return(
        <section className={`hero text-white w-full md:w-[80%] h-[843px] md:h-[640px] md:pl-20 pt-20 md:pt-0 flex flex-col md:flex-row md:items-center justify-center gap-12 md:rounded-2xl overflow-hidden  relative ${styles.hero}`}>
            <div className="left  text-center md:text-left w-full md:w-[60%] max-w-[90%] flex flex-col gap-10 items-center md:items-start self-center">
                <h1 className="w-full md:max-w-[30rem] text-[32px] md:text-[48px] leading-none font-medium">Award-winning custom designs and digital branding solutions</h1>
                <p className="md:max-w-[27rem]">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                and engaging brand experiences. Find out more about our services.</p>
                <Button value="LEARN MORE"/>

            </div>
            {/* <div className="right w-full md:w-[40%] h-full">
                <Image  
                    src="/assets/home/desktop/image-hero-phone.png"
                    width={663} 
                    height={828} 
                    alt="hero Phone"
                    // layout="responsive"
                    className="h-4/5 md:h-[140%] w-full min-w-[170%] md:min-w-[50%] md:max-w-[75%] absolute -bottom-40 md:-bottom-56  left-[43%]  md:left-[160px] md:right-0 -translate-x-[46%] md:translate-x-[30%] "
                />
            </div> */}
            <div className={`right w-full md:w-[50%] h-full relative z-50 ${styles.right}`}>
                {/* <Image  
                    src="/assets/home/desktop/image-hero-phone.png"
                    layout="fill"
                    alt="hero Phone"
                    objectFit="cover"
                    className=" w-full h-full "
                /> */}
            </div>
        </section>
    )
}

export default Hero;