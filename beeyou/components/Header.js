import React from "react";
import Image from "next/image";
import Link from "next/link";
import Mainmenu from "./Mainmenu";

function Header(props) {
  return (
    <header>
      <nav className="mobie-nav">
        <div className="">
          <button type="button" className="mobile-menu-btn">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="mobile-logo">
          <a href="#">
            <Image
              src="/images/logo.png"
              alt="BeeYou - Thời trang Chất"
              width={80}
              height={80}
              layout="fixed"
            />
          </a>
        </div>
        <div className="mobile-cart-btn">
          <a href="#" className="">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
      <div className="header-info">
        <div className="contact-info">
          <p className="text-left">
            <i className="fas fa-phone-alt"></i>
            <span>Chăm sóc khách hàng:</span>
            <a href="tel:0867064901">
              <strong>0867064901</strong>
            </a>
          </p>
          <p className="text-left">
            <i className="fa fa-credit-card"></i>
            <span>Mua hàng online:</span>
            <a href="tel:0867064901">
              <strong>0867064901</strong>
            </a>
          </p>
        </div>
        <div className="header-logo">
          <Link href="/">
            <a>
              <Image
                src="https://res.cloudinary.com/beeyou/image/upload/v1635431347/logo/logo_q5eftl.webp"
                alt="BeeYou - Thời trang Chất"
                width={80}
                height={80}
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <ul className="meta-menu" style={{ display: "inline-block" }}>
          <li>
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
      <Mainmenu></Mainmenu>
    </header>
  );
}

export default Header;
