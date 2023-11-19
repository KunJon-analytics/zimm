"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { communityItems } from "@/data/menu";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace("/[id]", "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="Logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item">
            <Link
              // className="nav-link dropdown-toggle active-menu"
              href="/"
              className={pathname === "/" ? "nav-link active-menu" : "nav-link"}

              // style={{color:'green'}}
            >
              Home
            </Link>
          </li>
          {/* End li (home mega menu) */}

          <li
            className={
              pathname === "/about-us" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/about-us" role="button" className="nav-link">
              About us
            </Link>
          </li>

          <li
            className={
              pathname === "/#tokenomics" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/#tokenomics" role="button" className="nav-link">
              Tokenomics
            </Link>
          </li>

          <li
            className={
              pathname === "/#roadmap" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/#roadmap" role="button" className="nav-link">
              Roadmap
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                communityItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Community
            </a>
            <ul className="dropdown-menu">
              {communityItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (community) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
