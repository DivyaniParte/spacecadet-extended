import { Planet, planets } from "@/utils/planets";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const fromPlanet = planets.find((planet)=> planet.name === searchParams.get('from') )
    const toPlanet = planets.find((planet)=> planet.name === searchParams.get('to') )
    
    const toCoords = (planet: Planet) => {
      const degrees = (((Math.round(date / 86400000) / (planet?.yearLength || 1)) * 360) % 360) * (Math.PI / 180)
      const x = planet.distanceToSun * Math.cos(degrees);
      const y = planet.distanceToSun * Math.sin(degrees);
      return [x, y]
    }

    const date = Number(searchParams.get("date"))
    
        if (fromPlanet && toPlanet && date) {
          const [x1, y1] = toCoords(fromPlanet)
          const [x2, y2] = toCoords(toPlanet)
          const deltaX = x2 - x1;
          const deltaY = y2 - y1;
    
          const distance =  Math.round(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 1000);
          return Response.json({distance})
        }
        return;
      
}
