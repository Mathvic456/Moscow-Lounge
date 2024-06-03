"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import { FaX } from "react-icons/fa6";

export const NavBar = () => {
  const [pathname, setPathname] = useState("/");
  const otherpathname = usePathname();
  const [isOpen, setisOpen] = useState(false);
  const [active, setIsActive] = useState("");

  const closeMenu = () => setisOpen(false);

  const handleMenuClick = () => {
    setisOpen(!isOpen);
  };

  const changePathName = (data) => {
    setPathname(data);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setIsActive(section.getAttribute("id"));
      }
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setIsActive(hash.substring(1));
    }
  }, []);

  return (
    <nav className="px-4 nav_border md:px-20 rounded-[100px]  py-5 w-full bg-[#0202028a] flex flex-row items-center justify-between">
      <span className="">Moscow</span>
      <div
        className={`flex absolute md:relative duration-300 h-[100vh] ${isOpen
            ? "pt-14 flex-col w-full z-50 justify-start gap-10 text-2xl bg-black/90 backdrop-blur top-0 left-0 h-[100vh]"
            : "md:flex-row flex-col -translate-x-full md:h-fit md:translate-x-0 top-0 justify-between items-center"
          }`}
      >
        <Link
          href="/"
          className={`mx-5 cursor-pointer ${active === "hero" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          Home
        </Link>
        <Link
        href="#about"
          onClick={() => {
            window.location.href = "/#about";
            setisOpen(false);
          }}
          className={`mx-5 cursor-pointer ${active === "about" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          About
        </Link>
        <Link
          href="/menu"
          onClick={() => {
            changePathName("menu");
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${otherpathname === `/menu`
              ? "text-[#cda45e]"
              : "text-white hover:text-[#cda45e]"
            }`}
        >
          Menu
        </Link>
        <span
          onClick={() => {
            changePathName("#specials");
            window.location.href = `/#specials`;
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${active === "specials" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          Specials
        </span>
        <span
          onClick={() => {
            changePathName("#events");
            window.location.href = `/#events`;
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${active === "events" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          Events
        </span>
        <span
          onClick={() => {
            changePathName("#gallery");
            window.location.href = "/#gallery";
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${active === "gallery" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          Gallery
        </span>
        <span
          onClick={() => {
            changePathName("#contact");
            window.location.href = "/#contact";
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${active === "contact" ? "text-[#cda45e]" : "text-white hover:text-[#cda45e]"
            }`}
        >
          Contact
        </span>
        <span
          onClick={() => {
            changePathName();
            closeMenu();
          }}
          className={`mx-5 cursor-pointer ${pathname === ``
              ? "text-[#cda45e]"
              : "text-white hover:text-[#cda45e]"
            }`}
        >
          Book a table
        </span>
      </div>
      <span
        className={`md:hidden duration-200 ${isOpen
            ? "rotate-[360] absolute z-40 right-4 text-white"
            : "-rotate-[360]"
          }`}
        onClick={handleMenuClick}
      >
        {isOpen ? <FaX size={30} onClick={closeMenu} /> : <IoMenu size={35} />}
      </span>
    </nav>
  );
};
