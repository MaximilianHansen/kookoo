import ThreeDayView from "./calendar/ThreeDayView";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



function App() {


  return (
  <div className="w-full flex flex-row h-screen overflow-hidden">
    <div className="h-100 w-[12%] bg-blue-200 flex-col">
      <div className="flex flex-col w-full justify-center items-center mt-10 hover:cursor-pointer bg-blue-100 p-4">
     
        <FaRegCalendarAlt style={{ fontSize: '2rem' }}/>
  
      <h1 className="mt-2 text-xl">Calendar</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center  hover:cursor-pointer  p-4">
     
        <FaHome style={{ fontSize: '2rem' }}/>
  
      <h1 className="mt-2 text-xl">Chores</h1>
      </div>
      <div className="flex flex-col w-full justify-center items-center  hover:cursor-pointer  p-4">
     
        <FaRegCalendarAlt style={{ fontSize: '2rem' }}/>
  
      <h1 className="mt-2 text-xl">Calendar</h1>
      </div>
    </div>
     <div className="w-full ">
        <h1 className="text-4xl font-serif p-4 px-8">Hansen Family</h1>
        <ThreeDayView />
      </div>
    </div>
  );
}

export default App;
