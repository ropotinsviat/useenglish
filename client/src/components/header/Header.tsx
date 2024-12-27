import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/svg/menu-hamburger-svgrepo-com.svg";
import PCNav from "./nav/PCNav";
import MobileNav from "./nav/MobileNav";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-white z-10 relative shadow-sm">
      <div className="text-[#565264] flex items-center justify-between px-6 min-h-[80px] sm:min-h-[100px] max-w-screen-xl mx-auto">
        <Link to="" className="text-3xl sm:text-4xl font-bold">
          useEnglish
        </Link>

        <PCNav />

        <MenuIcon
          className="block xl:hidden w-16 h-16 cursor-pointer text-[#838383] svg-icon hover:text-[#565264]"
          onClick={toggleNav}
        />
      </div>

      <MobileNav isNavOpen={isNavOpen} close={toggleNav} />
    </header>
  );
}

export default Header;
