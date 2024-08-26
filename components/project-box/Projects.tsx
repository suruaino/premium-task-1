 
 import Image from "next/image";
 import Link from "next/link";
 import styles from "./styles.module.css";

 const Projects = () => {
    return(
        <section className={`projects text-white w-full md:h-[640px] max-w-[80%] flex flex-col md:flex-row gap-6 ${styles.projects}`}>
            <div className="left w-full md:w-1/2 h-[250px] md:h-auto flex justify-center items-center">
                <Link 
                    href="/webdesign" 
                    className="group w-full h-full flex flex-col justify-center items-center rounded-2xl relative"     
                    style={{
                        backgroundImage: `url(/assets/home/desktop/image-web-design-large.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
                    <h2 className="text-[28px] md:text-[40px] z-50">WEB DESIGN</h2>
                    <p className="z-50">VIEW PROJECT</p>
                </Link>
            </div>
            <div className="right w-full md:w-1/2 flex flex-col justify-center items-center gap-6">
                <Link 
                    href="/appdesign" 
                    className="group w-full h-[250px] md:h-1/2 flex flex-col justify-center items-center rounded-2xl relative" 
                    style={{
                        backgroundImage: `url(/assets/home/desktop/image-app-design.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
                    <h2 className="text-[28px] md:text-[40px] z-50">APP DESIGN</h2>
                    <p className="z-50">VIEW PROJECT</p>
                </Link>
                <Link 
                    href="graphicdesign" 
                    className="group w-full h-[250px] md:h-1/2  flex flex-col justify-center items-center rounded-2xl relative"
                    style={{
                        backgroundImage: `url(/assets/home/desktop/image-graphic-design.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="overlay group-hover:bg-[#E7816B95] rounded-2xl absolute inset-0 z-40"></div>
                    <h2 className="text-[28px] md:text-[40px] z-50">GRAPHIC DESIGN</h2>
                    <p className="z-50">
                        VIEW PROJECT 
                        {/* <span>
                            <Image
                                src="/assets/"
                                width={10}
                                height={10}
                                alt="arrow icon"
                            />
                        </span> */}
                    </p>
                </Link>

            </div>
        </section>
    )
 }

 export default Projects;