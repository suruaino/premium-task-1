
import { url } from "inspector";
import Image from "next/image"
const More = () => {
    return(
        <section className="more w-full max-w-[80%] flex flex-col md:flex-row justify-between gap-[48px]">
            <div className="passionate w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
                <div className="img-box"
                    style={{
                        backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transform: 'rotate(-90deg)'
                    }}>
                    <Image
                        src="/assets/home/desktop/illustration-passionate.svg"
                        width={188}
                        height={162}
                        alt="arrow icon"
                        style={{
                            transform: 'rotate(90deg)'
                        }}
                    />
                </div>
                <h1 className="text-[20px] font-semibold tracking-[4px]">PASSIONATE</h1>
                <p className="text-base">
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                    art, design, and technology into exciting new solutions.
                </p>

            </div>

            <div className="resource w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
                <div className="img-box"
                        style={{
                            backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transform: 'rotate(-180deg)'
                        }}>
                        <Image
                            src="/assets/home/desktop/illustration-resourceful.svg"
                            width={188}
                            height={162}
                            alt="arrow icon"
                            style={{
                                transform: 'rotate(180deg)'
                            }}
                        />
                    </div>
                    <h1 className="text-[20px] font-semibold tracking-[4px]">PASSIONATE</h1>
                    <p className="text-base">
                        Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                        art, design, and technology into exciting new solutions.
                    </p>

                </div>

            <div className="friendly w-full md:max-w-[350px] flex flex-col items-center text-center gap-[48px]">
                <div className="img-box"
                        style={{
                            backgroundImage: `url(/assets/home/desktop/bg-pattern-hero-home.svg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transform: 'rotate(0deg)'
                        }}>
                        <Image
                            src="/assets/home/desktop/illustration-friendly.svg"
                            width={188}
                            height={162}
                            alt="arrow icon"
                            style={{
                                transform: 'rotate(0deg)'
                            }}
                        />
                    </div>
                <h1 className="text-[20px] font-semibold tracking-[4px]">PASSIONATE</h1>
                <p className="text-base">
                        Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                        art, design, and technology into exciting new solutions.
                </p>
            </div>
        </section>
    )
}
export default More;