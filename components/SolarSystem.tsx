import { planets } from "@/utils/planets";
const SolarSystem = () => {
  return (
    <div className="relative">
      {planets.map((planet) => {
        const rotation =
          ((Math.round(Date.now() / 86400000) / planet.yearLength) * 360) % 360;

        const planetStyle = {
          width: planet.diameter,
          height: planet.diameter,
          marginTop: -planet.diameter / 2,
          marginLeft: -planet.diameter / 2,
        };

        const orbitStyle = {
          width: planet.distanceToSun * 2,
          height: planet.distanceToSun * 2,
          top: -planet.distanceToSun,
          left: -planet.distanceToSun,
          transform: `rotate(${rotation}deg)`,
        };

        return (
          <div
            className="border-2 border-white/10 rounded-full absolute top-full left-1/2 box-border origin-center"
            style={orbitStyle}
            key={planet.name}
          >
            <div className="w-full h-full relative">
              <div
                key={planet.name}
                className={`rounded-full bg-gradient-to-tr absolute ${
                  planet.color
                } top-0 left-1/2 -ml-[${planet.diameter / 2}] `}
                style={planetStyle}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SolarSystem;
