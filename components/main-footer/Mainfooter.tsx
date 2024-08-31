import Image from "next/image";
import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="bg-black text-white md:h-[423px] pb-20 flex flex-col">
      <div className="container max-w-[80%] flex flex-col self-center gap-12">
        <div className="top mt-[144px] flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
          <div className="logo">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              width={196}
              height={24}
              alt="Main Header Logo"
            />
          </div>

          <nav className="uppercase tracking-widest flex flex-col md:flex-row items-center gap-4 md:gap-[42px]">
            <Link href="/aboutus" className="hover:underline">Our Company</Link>
            <Link href="/locations" className="hover:underline">Locations</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>

        <hr className="my-4 border border-t-0 border-b-gray-600 hidden md:block" />

        <div className="bottom text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-0">
          <div className="addresses text-[#ffffff96] text-[16px] flex flex-col md:flex-row gap-12 md:gap-28">
            <p>
              <b>Designo Central Office</b> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
            <p>
              <b>
                Contact Us (Central Office) <br />
                P : +1 253-863-8967 <br />M : contact@designo.co
              </b>
            </p>
          </div>
          <ul className="socials flex gap-[16px]">
            <li>
              <Link href="">
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/assets/shared/desktop/icon-youtube.svg"
                  width={20}
                  height={20}
                  alt="youtube icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  width={20}
                  height={20}
                  alt="twitter icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  width={20}
                  height={20}
                  alt="pinterest icon"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  width={20}
                  height={20}
                  alt="instagram icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
