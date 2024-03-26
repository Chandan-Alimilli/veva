import React from "react";
import logo from "./img/veva _logo.png";

const Navbar = () => {
  return (
    <div
      className="bg-[#102429] 
     flex justify-between text-white font-bold text-xl p-5 shadow-lg
     border border-[#7ed957] "
    >
      <img src={logo} className="h-24 mt-[-10px]" />
      <a href="https://ironglassbyte.com/">
        <img
          src="https://ironglassbyte.com/wp-content/uploads/2022/09/cropped-igb-logo-just-block-150x150.png"
          className="h-16"
        />
      </a>

      <a href="https://ironglassbyte.com/">
        <img
          src="https://ironglassbyte.com/wp-content/uploads/2022/09/cropped-igb-logo.png"
          className="h-16"
        />
      </a>
    </div>
  );
};

export default Navbar;
