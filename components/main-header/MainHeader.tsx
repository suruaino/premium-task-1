import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className=" h-[128px] flex flex-col justify-center">
      <div className="container max-w-[80%] w-full flex justify-between self-center">
        <div className="logo">
          <Image
            src="/assets/shared/desktop/logo-dark.png"
            width={196}
            height={24}
            alt="Main Header Logo"
          />
        </div>
        <nav className="flex gap-5 md:gap-[42px]">
          <Link href="/">Home</Link>
          <Link href="/aboutus">Our Company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;



// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";
// import About from "../../app/aboutus/page";

// interface HeaderProps {
//   onLinkClick: (component: React.ReactNode) => void;
// }

// const MainHeader: FC<HeaderProps> = ({ onLinkClick }) => {
//   return (
//     <header className=" h-[128px] flex flex-col justify-center">
//       <div className="container max-w-[80%] w-full flex justify-between self-center">
//         <div className="logo">
//           <Image
//             src="/assets/shared/desktop/logo-dark.png"
//             width={196}
//             height={24}
//             alt="Main Header Logo"
//           />
//         </div>
//         <nav className="flex md:gap-[42px]">
//           <Link href="/aboutus" onClick={() => onLinkClick(<About />)}>Our Company</Link>
//           <Link href="">Locations</Link>
//           <Link href="">Contact</Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default MainHeader;
