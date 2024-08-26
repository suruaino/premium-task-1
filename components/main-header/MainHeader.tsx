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
        <nav className="flex md:gap-[42px]">
          <Link href="">Our Company</Link>
          <Link href="">Locations</Link>
          <Link href="">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
