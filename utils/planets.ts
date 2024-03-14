export type Planet = {
  name: string;
  diameter: number;
  distanceToSun: number;
  yearLength: number;
  color: string;
};

export const planets: Planet[] = [
    {
      name: "hermes",
      diameter: 16.8,
      distanceToSun: 30,
      yearLength: 150,
      color: "from-green-500 to-emerald-400",
    },
    {
      name: "aphrodite",
      diameter: 24.1,
      distanceToSun: 55,
      yearLength: 350,
      color: "from-amber-500 to-yellow-400",
    },
    {
      name: "terra",
      diameter: 30.7,
      distanceToSun: 87,
      yearLength: 300,
      color: "from-emerald-500  to-teal-400",
    },
    {
      name: "ares",
      diameter: 26.8,
      distanceToSun: 120,
      yearLength: 270,
      color: "from-cyan-500 to-blue-400",
    },
    {
      name: "zeus",
      diameter: 45.8,
      distanceToSun: 165,
      yearLength: 400,
      color: "from-orange-500 to-red-400",
    },
    {
      name: "cronos",
      diameter: 36.5,
      distanceToSun: 230,
      yearLength: 550,
      color: "from-pink-500 to-purple-400",
    },
    {
      name: "caelus",
      diameter: 36.7,
      distanceToSun: 270,
      yearLength: 750,
      color: "from-teal-600 to-sky-400",
    },
    {
      name: "poseidon",
      diameter: 25.2,
      distanceToSun: 315,
      yearLength: 650,
      color: "from-purple-500 to-violet-400",
    },
  ];