import React from 'react'

function Event({x, hours , startTime}) {
    
    let percent = 100;
    let divSize = (percent/hours).toFixed(2);
    let eventStartTime = new Date(x.start.dateTime);
    let eventStartMin = eventStartTime.getMinutes();
    let eventEndTime = new Date(x.end.dateTime)
    let eventEndMin = eventEndTime.getMinutes();
    let eventDurationHours = (eventEndTime.getHours() - eventStartTime.getHours()); 
    let eventDurationMinutes = eventEndMin-eventStartMin;
    let durationPercent = (eventDurationHours + (eventDurationMinutes/60)) * divSize;
    let top = ((eventStartTime.getHours() - startTime) + (eventStartMin/60)) * divSize;
    let marginTop = 0-((eventStartTime.getHours() - startTime) * 2)
    let durationModifier = eventDurationHours * 2;

    console.log(divSize)
   
    
    const dynamicStyle = {
        top: `${top}%`,
        height: `calc(${durationPercent}% - ${durationModifier}px)`,
        marginTop: `${marginTop}px`
    };

    function padWithZero(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }
    function convertTime(x){
        if( x <= 12 ) { 
        let newTime = `${x}`;
         return(newTime)
         } else {
        x = x-12; 
        let newTime = `${x}`;
        return(newTime)
        }
    }
    function addExt(x){
        if( x <= 12 ) { 
        let newTime = `AM`;
         return(newTime)
         } else {
        x = x-12; 
        let newTime = `PM`;
        return(newTime)
        }
    }

  return (
    <div className="absolute bg-blue-400 rounded-xl w-3/4 text-white p-2" style={dynamicStyle}>
        <p className="w-full font-bold">Party Time</p>
        <p className="w-full">({convertTime(eventStartTime.getHours())}:{padWithZero(eventEndMin)}{addExt(eventStartTime.getHours())} to {convertTime(eventEndTime.getHours())}:{padWithZero(eventEndMin)}{addExt(eventEndTime.getHours())})</p>
    </div>
  )
}

export default Event
