import{ useState } from "react";
import MercuryOverview from "../assets/planet-mercury.svg";
import MercuryStructure from "../assets/planet-mercury-internal.svg";
import MercurySurface from "../assets/geology-mercury.png";
import PlanetInfo from "../PlanetComponents/PlanetInfo";
import "./PlanetsSide.css";

function Mercury() {
  const [changeInfo, setChangeInfo] = useState<number>(1);


  const overView =
    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97arth days, the  shortest of all the Sun's planets. and is a rocky body like Earth.";
  const structure =
    "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
  const surface =
    "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
  return (
    <>
      <div className="plInformationComponent">
        <PlanetInfo setChangeInfo={setChangeInfo} AboutMercury={changeInfo} />
      </div>
      <div className="mercury">
        <div className="mmmmain">
          <div className="MercuryImageContainer">
            {changeInfo === 1 ? (
              <img className="MercuryImage" src={MercuryOverview} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 2 ? (
              <img className="MercuryImage" src={MercuryStructure} alt="" />
            ) : (
              ""
            )}
            {changeInfo === 3 ? (
              <img className="MercuryImage" src={MercurySurface} alt="" />
            ) : (
              ""
            )}
          </div>
          <div className="mercuryTextAndInfo">
            <div className="mercuryInfoText">
              <h1>MERCURY</h1>
              <p className="text">
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

export default Mercury;
