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
    { name: "الرئيسية", href: "#" },
    { name: "الكورسات", href: "#courses" },
    { name: "الامتحانات", href: "#exams" },
    { name: "من نحن", href: "#about" },
    { name: "تواصل معنا", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* اللوجو */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img
              src={logoImg}
              alt="الغازي في التاريخ"
              style={{
                width: "50px",
              }}
            />
          </div>

          {/* روابط التنقل (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-warm-white hover:text-gold transition-colors duration-200 font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* زر تسجيل الدخول */}
          <div className="hidden md:flex items-center">
            <a
              href="/login"
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors duration-200"
            >
              تسجيل الدخول
            </a>
          </div>

          {/* زر القائمة (Mobile) */}
          <div className="md:hidden mx-7">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-white hover:text-gold focus:outline-none text-2xl"
            >
              {isOpen ? (
                <FontAwesomeIcon className="cursor-pointer" icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
              )}
            </button>
          </div>
        </div>

        {/* قائمة الموبايل */}
        <div
          className={`md:hidden bg-charcoal border-t border-border-navy transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 pb-5 pt-3 pointer-events-auto"
              : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-[17px] text-warm-white font-bold hover:text-gold hover:bg-navy/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/login"
            className="block mx-4 mt-4 bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-yellow-600 transition-colors"
          >
            تسجيل الدخول
          </a>
        </div>
      </div>
    </nav>
  );
}
