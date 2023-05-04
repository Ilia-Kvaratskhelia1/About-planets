import  { useState } from "react";
import PlanetInfo from "../PlanetComponents/PlanetInfo";
import UranusInternal from "../assets/planet-Uranus-internal.svg";
import UranusPlanet from "../assets/planet-Uranus.svg";
import UranusGeology from "../assets/geology-Uranus.png";

function Uranus() {
  const [changeInfo, setChangeInfo] = useState<number>(1);

  const overView =
    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
  const structure =
    "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
  const surface =
    "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
  return (
    <>
      <div className="plInformationComponent">
        <PlanetInfo setChangeInfo={setChangeInfo} />
      </div>
      <div className="mercury">
        <div className="mmmmain">
          <div className="MercuryImageContainer">
            {changeInfo === 1 ? (
              <img className="MercuryImage" src={UranusPlanet} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 2 ? (
              <img className="MercuryImage" src={UranusInternal} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 3 ? (
              <img className="MercuryImage" src={UranusGeology} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="mercuryTextAndInfo">
            <div className="mercuryInfoText">
              <h1>URANUS</h1>
              <p>
                {changeInfo === 1 ? overView : ""}
                {changeInfo === 2 ? structure : ""}
                {changeInfo === 3 ? surface : ""}
                <br />
                <span className="source">
                  Source:<a href="#">Wikipedia</a>
                </span>
              </p>
            </div>
            <div className="NoneComponent">
              <PlanetInfo setChangeInfo={setChangeInfo} />
            </div>
          </div>
        </div>
        <div className="aboutMercury">
          <div className="about">
            <p>ROTATION TIME</p>
            <p>58.6 DAYS</p>
          </div>
          <div className="about">
            <p>REVOLUTION TIME</p>
            <p>58.6 DAYS</p>
          </div>
          <div className="about">
            <p>RADIUS</p>
            <p>2,439.7 KM</p>
          </div>
          <div className="about">
            <p>AVERAGE TEMP</p>
            <p>430°c</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uranus;
