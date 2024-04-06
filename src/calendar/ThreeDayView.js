import React from 'react'
import Day from './Day'


function threeDayView() {
  return (
    <div>
    <div className='flex flex-row w-full px-8 justify-around mt-4 mb-4'> 
        <div className='flex flex-col'> 
            <h1 className="w-full text-center font-bold text-3xl">5</h1>
            <h1 className="w-full text-center text-3xl">Fri</h1>
        </div>
        <div className='flex flex-col'> 
            <h1 className="w-full text-center font-bold text-3xl">6</h1>
            <h1 className="w-full text-center text-3xl">Sat</h1>
        </div>
        <div className='flex flex-col'> 
            <h1 className="w-full text-center font-bold text-3xl">7</h1>
            <h1 className="w-full text-center text-3xl">Sun</h1>
        </div>
    </div>
    <div className='flex flex-row w-full px-8 max-h-screen overflow-auto'>
    <Day dayOfTheWeek={"Fri"} numberDate={5}/>
    <Day dayOfTheWeek={"Sat"} numberDate={6}/>
    <Day dayOfTheWeek={"Sun"} numberDate={7}/>
</div>
</div>
  )
}

export default threeDayView