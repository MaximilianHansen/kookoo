import React from 'react'

function Hour({time, hours}) {
    function convertTime(x){
        if( x <= 12 ) { 
        let newTime = `${x} am`;
         return(newTime)
         } else {
        x = x-12; 
        let newTime = `${x} pm`;
        return(newTime)
        }
    }

    const height = 100/hours;
        

    const dynamicStyle = {
        height: `${height}%`
    };
    
  return (
    <div className="border-2 border-slate-500 w-1/2 pl-2 pt-1 -mt-[2px]" style={dynamicStyle}>
    <p className="text-slate-500">{convertTime(time)}</p>
    </div>
  )
}

export default Hour
