import { useState } from "react";
import PlanetInfo from "../PlanetComponents/PlanetInfo";
import SaturnInternal from "../assets/planet-Saturn-internal.svg";
import SaturnPlanet from "../assets/planet-Saturn.svg";
import SaturnGeology from "../assets/geology-Saturn.png";

function Saturn() {
  const [changeInfo, setChangeInfo] = useState<number>(1);
  const overView =
    "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth..";
  const structure =
    "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
  const surface =
    "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ";
  return (
    <>
      <div className="plInformationComponent">
        <PlanetInfo setChangeInfo={setChangeInfo} />
      </div>
      <div className="mercury">
        <div className="mmmmain">
          <div className="MercuryImageContainer">
            {changeInfo === 1 ? (
              <img className="MercuryImage" src={SaturnPlanet} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 2 ? (
              <img className="MercuryImage" src={SaturnInternal} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 3 ? (
              <img className="MercuryImage" src={SaturnGeology} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="mercuryTextAndInfo">
            <div className="mercuryInfoText">
              <h1>SATURN </h1>
              <p>
                {changeInfo === 1 ? overView : ""}
                {changeInfo === 2 ? structure : ""}
                {changeInfo === 3 ? surface : ""}
                <br />
                <span className="source">
                  Source:<a>Wikipedia</a>
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

export default Saturn;
