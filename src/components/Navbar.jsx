import React,{useState,useEffect, useRef} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const NavLinks = [
        { name: "About", link: "/about" },
        // { name: "Our Services", link: "/services" },
        { name: "Product", link: "/product" },
        { name: "Contact", link: "/contact" },
      ];
      const [open, setOpen] = useState(false); // Hamburger menu state
      const location = useLocation();
  const menuRef = useRef(null); 
  return (
    <>
    <div ref={menuRef} className="bg-white top-0 w-full fixed border-b z-[20] font-roboto">
      <nav className="container lg:w-11/12 m-auto flex justify-between py-5 relative">  

        {/* NavLinks */}
        <ul
          className={`lg:flex md:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto w-full lg:w-auto lg:pl-0 px-9 transition-all duration-500 ease-in bg-white ${open ? "top-full opacity-100" : "hidden"
            } lg:opacity-100`}
        >
          {NavLinks.map((link) => (
            <li key={link.name} className="lg:ml-8 text-xl lg:my-0 my-4">
              <Link
                to={link.link}
                onClick={() => setOpen(false)}
                className={`font-spaceGrotesk xl:text-[18px] font-medium text-[15px] ${location.pathname === link.link
                  ? "text-[#028A4C]"
                  : "text-[#171717]"
                  } hover:text-[#028A4C] focus:text-[#028A4C] duration-500`}
              >
                {link.name}
              </Link>
            </li>
          ))}

         
        </ul>

        <div className="flex mx-4 lg:mx-0 md:mx-8 gap-2">
          {/* Mobile Hamburger Menu */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="md:text-4xl text-2xl cursor-pointer lg:hidden z-10"
          >
            {open ? (
              <IoClose className="text-[#028A4C]" />
            ) : (
              <SlMenu className="text-[#028A4C]" />
            )}
          </div>

        
        </div>

      
      </nav>
 
      
    </div></>
  )
}

export default Navbar