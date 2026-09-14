// React Router
import { Link } from "react-router-dom";

// Hooks
import { useState } from "react";

// Import IMG
import logoImg from "../assets/Logo/transparent-Logo.png";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#heroSection" },
    { name: "من نحن", href: "#aboutPlatform" },
    { name: "الكورسات", href: "#courses" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    // Nav Links Start
    <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm bg-black/15">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* Logo Start */}
          <Link to="/">
            <div className="flex-shrink-0 flex items-center cursor-pointer mx-7">
              <img
                src={logoImg}
                alt="الغازي في التاريخ"
                style={{
                  width: "50px",
                }}
              />
            </div>
          </Link>
          {/* Logo End */}

          {/* Links Desktop Start*/}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="text-warm-white hover:text-gold transition-colors duration-200 font-bold bg-transparent cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Links Desktop End*/}

          {/* Login & SignUp Start */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="border-[2px] text-white border-gold  px-6 py-3 rounded-lg font-bold hover:bg-gold transition-colors duration-200"
            >
              تسجيل الدخول
            </Link>

            <Link
              to="/signup"
              className="bg-gold text-white  px-6 py-3.5 rounded-lg font-bold hover:bg-gold-light transition-colors duration-200"
            >
              إنشاء حساب
            </Link>
          </div>
          {/* Login & SignUp End */}

          {/* Button(Mobile) Start */}
          <div className="lg:hidden mx-7">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-white hover:text-gold focus:outline-none text-3xl"
            >
              {isOpen ? (
                <FontAwesomeIcon className="cursor-pointer" icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
              )}
            </button>
          </div>
          {/* Button(Mobile) End */}
        </div>

        {/* Navbar Mobiles Start*/}
        <div
          className={`md:hidden bg-gradient-to-b backdrop-blur-sm bg-black/25 border-t-1 border-white transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-auto opacity-100 pb-5 pt-3 pointer-events-auto"
              : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-right px-4 py-[17px] text-warm-white font-bold hover:text-gold hover:bg-black/25 transition-colors bg-transparent"
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/login"
            className="block mx-4 mb-6 mt-4 border-2 border-[#D4AF37] text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-[#D4AF37] transition-colors"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/signup"
            className="block mx-4 mt-4 bg-[#D4AF37] text-white font-bold px-6 py-3.5 rounded-lg text-center hover:bg-[#B8941F] transition-colors"
          >
            انشاء حساب
          </Link>
        </div>
        {/* Navbar Mobiles End*/}
      </div>
    </nav>
    // Nav Links End
  );
}
