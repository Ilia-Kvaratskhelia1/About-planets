import  { useState } from "react";
import PlanetInfo from "../PlanetComponents/PlanetInfo";
import EarthInternal from "../assets/planet-earth-internal.svg";
import EarthPlanet from "../assets/planet-earth.svg";
import EarthGeology from "../assets/geology-earth.png";

function Earth() {
  const [changeInfo, setChangeInfo] = useState<number>(1);

  const overView =
    "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
  const structure =
    "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
  const surface =
    "MThe total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
  return (
    <>
      <div className="plInformationComponent">
        <PlanetInfo setChangeInfo={setChangeInfo} />
      </div>
      <div className="mercury">
        <div className="mmmmain">
          <div className="MercuryImageContainer">
            {changeInfo === 1 ? (
              <img className="MercuryImage" src={EarthPlanet} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 2 ? (
              <img className="MercuryImage" src={EarthInternal} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 3 ? (
              <img className="MercuryImage" src={EarthGeology} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="mercuryTextAndInfo">
            <div className="mercuryInfoText">
              <h1>EARTH</h1>
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

export default Earth;
