import { useState } from "react";
import PlanetInfo from "../PlanetComponents/PlanetInfo";
import venusInternal from "../assets/planet-venus-internal.svg";
import venusPlanet from "../assets/planet-venus.svg";
import venusGeology from "../assets/geology-venus.png";

function Venus() {
  const [changeInfo, setChangeInfo] = useState<number>(1);

  const overView =
    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
  const structure =
    "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
  const surface =
    "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.";

  return (
    <>
      <div className="plInformationComponent">
        <PlanetInfo setChangeInfo={setChangeInfo} />
      </div>
      <div className="mercury">
        <div className="mmmmain">
          <div className="MercuryImageContainer">
            {changeInfo === 1 ? (
              <img className="MercuryImage" src={venusPlanet} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 2 ? (
              <img className="MercuryImage" src={venusInternal} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 3 ? (
              <img className="MercuryImage" src={venusGeology} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="mercuryTextAndInfo">
            <div className="mercuryInfoText">
              <h1>VENUS</h1>
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

export default Venus;
