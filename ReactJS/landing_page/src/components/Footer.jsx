import React from "react";
import { platformLinks, contactInfo } from "../constants";
import { Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-neutral-300" id='contact'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">

        {/* Platform */}

        <div>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-orange-500 transition duration-200">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2">
            <li className="flex justify-center md:justify-start items-center">
              <Phone className="mr-2 text-orange-500" size={20} />
              <a href={`https://wa.me/917903648044`} className="hover:text-orange-500">
                +91 7903648044
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <Mail className="mr-2 text-orange-500" size={20} />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-orange-500">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/SonuNM1" target="_blank" rel="noopener noreferrer">
              <Github className="text-neutral-300 hover:text-orange-500 transition duration-200" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sonunmahto/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-neutral-300 hover:text-orange-500 transition duration-200" size={24} />
            </a>
            <a href="https://www.instagram.com/the_sonu.nm/" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-neutral-300 hover:text-orange-500 transition duration-200" size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}

      <div className="text-center text-sm text-neutral-500 mt-10">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
