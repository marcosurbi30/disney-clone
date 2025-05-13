import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú hamburguesa si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  // Opciones del menú hamburguesa
  const hamburgerMenuItems = [
    { name: "Perfil", action: () => console.log("Ir a Perfil") },
    { name: "Configuración", action: () => console.log("Ir a Configuración") },
    { name: "Cerrar Sesión", action: () => console.log("Cerrar Sesión") },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-4 ">
        <div>
          <img
            src={logo}
            alt=""
            className="w-[80px] md:w-[115px] object-cover"
          />
        </div>

        <div className="hidden md:flex items-center gap-3 text-white">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5 items-center text-white">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
              border-[1px] border-gray-900 p-3 px-5 py-4 rounded-lg shadow-lg"
              >
                {menu.map(
                  (item, index) =>
                    index < 3 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Abrir menú de usuario"
          >
            <img
              className="w-[40px] h-[40px] rounded-full border-2 border-gray-300 hover:border-blue-500 transition-colors"
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt="profile"
            />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-3 bg-[#121212] border-[1px] border-gray-900 rounded-lg shadow-lg p-3 z-10">
              {hamburgerMenuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
