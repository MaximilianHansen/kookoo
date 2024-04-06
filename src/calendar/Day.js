import React from 'react'
import Hour from "./Hour";
import Event from "./Event";

function Day({numberDate,dayOfTheWeek}) {
    const hours = 24;
    const startTime = 1;
    const hourBlocks = Array.from({ length: hours }, (_, i) => <Hour hours={hours} key={i} time={i + startTime} />);
    const events = [
        {
        start: {dateTime: '2024-04-04T12:00:00-04:00', timeZone: 'America/New_York'},
        end: {dateTime: '2024-04-04T17:00:00-04:00', timeZone: 'America/New_York'}
            }
    ];

  return (
   
        <div className="App h-[150vh] w-full flex flex-col items-center mt-2 -mr-[2px] relative">
            {hourBlocks}
            <Event x={events[0]} hours={hours} startTime={startTime} />
        </div>
    
  )
}

export default Day
