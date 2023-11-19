"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MainMenu from "./MainMenu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-five white-vr ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center">
          <div className="logo order-lg-0">
            <Link href="/">
              <Image
                src="/images/logo/logo_02.png"
                alt=""
                width={95}
                height={30}
              />
            </Link>
          </div>
          {/* End logo */}
          <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
            <Link
              href="/"
              className="donate-btn fw-500 tran3s position-relative d-none d-lg-block"
            >
              Donate Now
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
