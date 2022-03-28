import React from "react";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand text-uppercase fs-2 text-center" href="/">
            {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;