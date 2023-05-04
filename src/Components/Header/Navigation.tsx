import "./Navigation.css";
import Mercury from "../assets/planet-mercury.svg";
import venus from "../assets/planet-venus.svg";
import Earth from "../assets/planet-earth.svg";
import Mars from "../assets/planet-mars.svg";
import jupiter from "../assets/planet-jupiter.svg";
import saturn from "../assets/planet-saturn.svg";
import uranus from "../assets/planet-uranus.svg";
import neptune from "../assets/planet-neptune.svg";
import Arrow from "../assets/icon-chevron.svg";
import { Link} from "react-router-dom";
import React from "react";
function Navigation(props: any) {

  return (
    <div>
      <ul
        className="mainNav"
        style={{ top: props.activetMenu ? "-110%" : "10%" }}
        onClick={()=>props.setActiveMenu(true)}
      >
        <li>
          <span>
            <img className="navPlanetIcon" src={Mercury} alt="mercury" />
            <Link to={'/about-planets'}>MERCURY</Link>
          </span>
          <span>
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="">
            <img className="navPlanetIcon" src={venus} alt="venus" />
            <Link to={'venus'}>VENUS</Link>

          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={Earth} alt="Earth" />
            <Link to={'earth'}>EARTH</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={Mars} alt="Mars" />
            <Link to={'mars'}>MARS</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={jupiter} alt="Jupiter" />
            <Link to={'jupiter'}>JUPITER</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={saturn} alt="Saturn" />
            <Link to={'saturn'}>SATURN</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={uranus} alt="uranus" />
            <Link to={"uranus"}>URANUS</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
        <li>
          <span className="planetSect">
            <img className="navPlanetIcon" src={neptune} alt="Neptune" />
            <Link to={'neptun'}>NEPTUN</Link>
          </span>
          <span className="ArrowNav">
            <img src={Arrow} alt="Open" />
          </span>
        </li>
      </ul>
      <div className="mainDesknav">
        <ul className="desktopMenu">
          <li>
          <Link className="MERCURY" to={'/about-planets'}>MERCURY</Link>
          </li>
          <li>
          <Link className="VENUS" to={'venus'}>VENUS</Link>

          </li>
          <li>
            <Link className="EARTH" to={'earth'}>EARTH</Link>
          </li>
          <li>
            <Link className="MARS" to={'mars'}>MARS</Link>

          </li>
          <li>
            <Link className="JUPITER" to={'jupiter'}>JUPITER</Link>

          </li>
          <li>
            <Link  className="SATURN" to={'saturn'}>SATURN</Link>
          </li>
          <li>
              <Link className="URANUS" to={"uranus"}>URANUS</Link>
          </li>
          <li>
            <Link className="NEPTUN" to={'neptun'}>NEPTUN</Link>
          </li>
        </ul>
      </div>


    </div>

  );
}

export default React.memo(Navigation);
