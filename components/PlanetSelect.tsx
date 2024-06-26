import { planets } from "@/utils/planets";
import { Listbox } from "@headlessui/react";

export default function PlanetSelect({
  stop,
 setStop,
 otherStop,
 label,
 className,
  excludedPlanets,
 stops,
}: {
  stop: string;
 setStop: any; // Consider using a more specific type than 'any'
 otherStop: string;
 label: string;
 className?: string;
    excludedPlanets?: string[];
 stops?: string[]; 
}) {
  return (
    <Listbox value={stop} onChange={setStop} as="div" className={`relative ${className}`}>
      <Listbox.Button
        className={`border-2 border-violet-500 hover:bg-violet-950 transition-colors hover:text-white px-5 py-3 lg:px-10 lg:py-4 rounded-full appearance-none bg-black w-full lg:w-52 text-center ${
          stop ? "text-white" : "text-neutral-700"
        }`}
      >
        {stop ? stop : label}
      </Listbox.Button>
      <Listbox.Options className="absolute w-full border-2 border-violet-500 p-4 rounded-3xl bg-black mt-3 z-40  transition-colors">
        {planets
        .filter((planet) => planet.name !== otherStop && !excludedPlanets?.includes(planet.name)) // Use excludedPlanets here
          .map((planet) => {
            return (
              <Listbox.Option
                key={planet.name}
                value={planet.name}
                className="cursor-pointer hover:text-violet-500 rounded-full"
              >
                {planet.name}
              </Listbox.Option>
            );
          })}
      </Listbox.Options>
    </Listbox>
  );
}
