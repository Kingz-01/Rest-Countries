import React, { useState } from "react";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({darkmode, setDarkMode}) => {
  

  if (darkmode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const icon = darkmode ? <BsFillMoonFill /> : <BsMoon />;

  return (
    <div className="d-flex justify-content-between align-items-center px-5 py-5 bg-elements custom-text-white">
      <Link
        to="/"
        className="m-0 text-decoration-none custom-text-white fs-2 fw-semibold"
      >
        Where in the World?
      </Link>

      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkmode);
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        style={{ cursor: "pointer" }}
        className="d-flex gap-2 align-items-center"
      >
        {icon}
        <p className="m-0">Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
