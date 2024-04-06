import React from 'react'
import Day from './Day'

function Week() {
  return (
    <div className='flex flex-row w-full p-8'>
        <Day dayOfTheWeek={"Fri"} numberDate={5}/>
        <Day dayOfTheWeek={"Sat"} numberDate={6}/>
        <Day dayOfTheWeek={"Fri"} numberDate={5}/>
        <Day dayOfTheWeek={"Fri"} numberDate={5}/>
        <Day dayOfTheWeek={"Sat"} numberDate={6}/>
        <Day dayOfTheWeek={"Fri"} numberDate={5}/>
        <Day dayOfTheWeek={"Fri"} numberDate={5}/>
    </div>
  )
}

export default Week