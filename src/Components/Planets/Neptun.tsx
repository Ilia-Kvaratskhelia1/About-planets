import  { useState } from 'react'
import PlanetInfo from '../PlanetComponents/PlanetInfo'
import NeptunInternal from "../assets/planet-neptune-internal.svg"
import NeptunPlanet from "../assets/planet-neptune.svg"
import NeptunGeology from "../assets/geology-neptune.png"

function Neptun() {
  const [changeInfo , setChangeInfo]=useState<number>(1)

  const overView="Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus."
  const structure="Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
  const surface="Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
  return (
   <>
    <div className="plInformationComponent">
    <PlanetInfo setChangeInfo={setChangeInfo}  />
    </div>
    <div className="mercury">
    <div className="mmmmain">
      <div className="MercuryImageContainer">
        {changeInfo === 1 ?<img className="MercuryImage" src={NeptunPlanet} alt="" />:""}
        {changeInfo === 2 ?<img className="MercuryImage" src={NeptunInternal} alt="" />:""}
        {changeInfo === 3 ?<img className="MercuryImage" src={NeptunGeology} alt="" />:""}
      </div>
     <div className="mercuryTextAndInfo">
     <div className="mercuryInfoText">
        <h1>NEPTUN</h1>
        <p>
        {changeInfo === 1 ? overView : ""}
        {changeInfo === 2 ? structure : ""}
        {changeInfo === 3 ? surface : ""}
          <br/>
      <span className="source">
      Source:<a href='#'>Wikipedia</a>
        </span>
        </p>
      </div>
      <div className="NoneComponent">
          <PlanetInfo  setChangeInfo={setChangeInfo} />
      </div>
    </div>
     </div>
      <div className="aboutMercury">
        <div  className="about">
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
  )
}

export default Neptun