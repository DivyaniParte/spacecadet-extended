"use client";
import { useEffect, useState } from "react";
import PlanetSelect from "@/components/PlanetSelect";
import DatePicker from "@/components/DatePicker";



function Planner({ content }: { content: any }) {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [distance, setDistance] = useState<number>();
  const [stops, setStops] = useState<string[]>([]);


  useEffect(() => {
 if (from && to && date) {
  const calculateDistance = (from: string, to: string, date: Date) => {
    return fetch(`/api?from=${from}&to=${to}&date=${date?.getTime()}`)
       .then((res) => {
         if (!res.ok) {
           throw new Error('Network response was not ok');
         }
         return res.json();
       })
       .then((json) => json.distance)
       .catch((error) => {
         console.error('There was a problem with the fetch operation:', error);
         // Handle the error appropriately, e.g., by setting a default distance or showing an error message
       });
   };

    // Calculate the distance between the departure and destination
    calculateDistance(from, to, date).then((distance) => {
      setDistance(distance);
    });

    // If there are additional stops, calculate their distances and add them to the total
    if (stops.length > 0) {
      let totalDistance = 0;
      const distancePromises = stops.map((stop) => calculateDistance(from, stop, date));

      Promise.all(distancePromises).then((distances) => {
        totalDistance = distances.reduce((acc, curr) => acc + curr, 0);
        setDistance(totalDistance);
      });
    }
 }
}, [from, to, stops, date]);

  const addStop = (stop: string) => {
    if (!stops.includes(stop)) {
      setStops([...stops, stop]);
    }
 };

 const removeStop = (index: number) => {
    setStops(stops.filter((_, i) => i !== index));
 };

 const updateStop = (index: number, newStop: string) => {
    const updatedStops = [...stops];
    updatedStops[index] = newStop;
    setStops(updatedStops);
 };
  
  return (
     <>
       <div className="bg-gradient-to-b from-black to-violet-950 text-center ">
       <div className="bg-gradient-to-tr from-pink-950 via-violet-950 to-transparent absolute bottom-0 left-0 w-full h-full"></div>
        <div className="bg-gradient-to-tl from-pink-950 via-violet-950 to-transparent absolute bottom-0 right-0 w-full h-full"></div>
         <div className="bg-gradient-to-b from-black via-black to-transprent w-full h-full absolute "></div>
         <div className="min-h-screen  text-white relative  px-10 xl:px-24 bg-gradient-to-r from-transparent via-black to-transparent z-20 flex flex-col justify-center">
          <div className="mt-10  mx-auto  flex flex-col lg:flex-row lg:items-center gap-y-6">
        
 
        
              <span className="px-3 flex flex-row flex-wrap">{content.leaving}</span>
            
            <PlanetSelect
              label={content.departure}
              stop={from}
              setStop={setFrom}
                otherStop={to}
                className="flex-grow"
                  />
     
              
  
          <span className="px-3">{content.going}</span>
            <PlanetSelect
              label={content.destination}
              stop={to}
              setStop={setTo}
              otherStop={from}
             className="flex-grow"
            />
       
                

            <DatePicker
               date={date}
               setDate={setDate}
                label={content.datepicker}
                className="flex-grow"
                  />
                     <button onClick={() => addStop('')}
             className="bg-violet-900  rounded-full text-center p-3 m-3 justify-center "
           > + </button>
              
                
   
          <div className="flex flex-row flex-wrap gap-2 ">
          {stops.map((stop, index) => (
           <div key={index} className="flex items-center ">
            <PlanetSelect
            label="Add Stop"
            stop={stop} // Ensure this is the selected stop, not an empty string
            setStop={(newStop: string) => updateStop(index, newStop)} // Update the stop at the current index
            otherStop={from} // Assuming 'from' is the starting point of the journey
            excludedPlanets={[from, to, ...stops.filter((_, i) => i !== index)]} // Exclude the start, destination, and all other stops except the current one
            className="flex-grow"
            />
               
           <button onClick={() => removeStop(index)} className="bg-violet-900  rounded-full text-center p-3 m-3 justify-center "> X </button>
           </div>
             ))}
            
            </div>
           </div>
           </div>
           </div>
     
       
     
       {distance && (
         <div className="fixed bottom-0 text-center w-full left-0 flex z-20 px-5">
           <div
             className={`mx-auto lg:min-w-96 border-t-2 border-x-2 bg-black ${
               distance <= 200000
                 ? `border-lime-500 text-lime-500`
                 : `border-red-400 text-red-400`
             } rounded-t-3xl z-50 p-5`}
           >
             {distance}km
             <span className="text-lg lg:text-2xl block uppercase font-bold tracking-widest my-3">
               {distance <= 200000 && content.success}
               {distance > 200000 && content.failure}
             </span>
           </div>
          </div>
      
        )}
       
     </>
  );
 }

export default Planner;
