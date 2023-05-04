import "./PlanetInfo.css";

function PlanetInfo({setChangeInfo}:any) {
  return (
    <>
      <div className="planetInfo">
      <button onClick={() => setChangeInfo(1)}>OVERVIEW</button>
        <button onClick={() => setChangeInfo(2)}>STRUCTURE</button>
        <button onClick={() => setChangeInfo(3)}>SURFACE</button>
      </div>
      <div className="tabletPlanetInfo">
        <button onClick={() => setChangeInfo(1)}>1 OVERVIEW</button>
        <button onClick={() => setChangeInfo(2)}>2 INTERNAL STRUCTURE</button>
        <button onClick={() => setChangeInfo(3)}>3 SURFACE</button>
      </div>
    </>
  );
}

export default PlanetInfo;
