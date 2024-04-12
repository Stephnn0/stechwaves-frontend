import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-lg flex items-center justify-between px-7 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <MenuIcon />
        <img src="/img/logo3.png" alt="Logo" className="h-7 w-auto" />
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex space-x-6 text-gray-600  ">
        <button onClick={() => scrollToSection("section1")}>About</button>
        <button
          className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-lg"
          onClick={() => scrollToSection("section4")}
        >
          Free Consulting
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
