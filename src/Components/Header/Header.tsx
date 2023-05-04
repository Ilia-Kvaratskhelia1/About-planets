import "./Header.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BurgerMenu from "../assets/icon-hamburger.svg";
import Navigation from "./Navigation";
function Header() {

    const [activetMenu , setActiveMenu] = useState<boolean>(true)
    const burgerMenuHandler = ()=>{
        setActiveMenu(!activetMenu)
    }
  
  return (
    <>
      <header>
        <div className="title">
          <h2>THE PLANETS</h2>
        </div>
        <span>
          <img src={BurgerMenu} 
           style={{opacity:activetMenu ? "100%" : "20%"}}
          alt="Menu"  className="BurgMenuu" onClick={burgerMenuHandler} />
        </span>
        <div className="desktopNav">
      <Navigation   />
        </div>
      </header>
      <div className="tabletNav">
      <Navigation  activetMenu={activetMenu} setActiveMenu={setActiveMenu} />
      </div>
   <Outlet/>

    </>
  );
}

export default Header;

