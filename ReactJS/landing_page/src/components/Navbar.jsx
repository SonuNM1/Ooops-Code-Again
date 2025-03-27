import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { Menu, X, Instagram, Linkedin, Github } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">Sonu NM.</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">

            {/* Desktop Navigation */}

            {navItems.map((item, index) => (
              <li className="hover:text-orange-500" key={index}>
                <a href={item.href} className="cursor-pointer">{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Social Links */}

          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/the_sonu.nm/"
                className="p-2 rounded-md transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/sonunmahto/"
                className="p-2 rounded-md transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://github.com/SonuNM1"
                className="p-2 rounded-md transition-transform duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/the_sonu.nm/"
                className="p-2 border rounded-md"
              >
                <Instagram size={20} />
              </a>
              <a href="#" className="https://github.com/SonuNM1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="https://www.linkedin.com/in/sonunmahto/">
                <Github size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
