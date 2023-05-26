import React from "react";


const Header = () => {
  return (
    <header class="header">
      <a href="#" class="logo">
      {/* <Image
        width={60}
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bxniddwcus7orai6swdf"
      ></Image> Blood Bank{" "} */}
      </a>
      <nav1 class="navbar">
        <a href="#home">home</a>
        <a href="#aboutus">About Us</a>
        <a href="#services">Services</a>
        <a href="#contactus">Contact Us</a>
        <a href="#main">Main Information</a>
      </nav1>
      <div class="icons">
        <div class="fas fa-bars" id="menu-btn"></div>
        <div class="fas fa-search" id="search-btn"></div>
      </div>

      <form action="" class="search-form">
        <input
          type="search"
          id="search-box"
          placeholder="search here..."
        ></input>
        <label for="search-box" class="fas fa-search"></label>
      </form>
    </header>
  );
};

export default Header;