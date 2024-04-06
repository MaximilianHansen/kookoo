import React from 'react'
import Hour from "./Hour";
import Event from "./Event";

function Day() {
    const hours = 18;
    const startTime = 5;
    const hourBlocks = Array.from({ length: hours }, (_, i) => <Hour hours={hours} key={i} time={i + startTime} />);
    const events = [
        {
        start: {dateTime: '2024-04-04T12:00:00-04:00', timeZone: 'America/New_York'},
        end: {dateTime: '2024-04-04T17:00:00-04:00', timeZone: 'America/New_York'}
            }
    ];

  return (
    <div>
        <h1 className="w-full text-center font-bold text-3xl">5</h1>
        <h1 className="w-full text-center text-3xl">Friday</h1>
        <div className="App h-[80vh] w-full flex flex-col items-center mt-5 relative">
            {hourBlocks}
            <Event x={events[0]} hours={hours} startTime={startTime} />
        </div>
    </div>
  )
}

export default Day
