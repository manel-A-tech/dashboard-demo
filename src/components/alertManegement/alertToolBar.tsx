
import SearchBar from "../ui/searchBar"
import DatePicker from "./datePicker"
import StatusFilter from "./statusFilter"
import TabGroup from "./tabGroup"
import ViewToggle from "./viewToggle"


function AlertTooLBar(){
  return(
    <div className="flex flex-row justify-between  mx-2  my-4 h-10 ">
    
       <div className=" flex items-center">
       <TabGroup/>
     </div>
      <div className=" flex flex-row gap-2 px-3 justify-center items-center">

      <SearchBar placeholder="Sarch by alert, camera.." className="h-10 bg-tranparent border border-stone-400 bg-white  flex items-center rounded-lg  " iconClassName="bg-[#6F58C9] text-stone-300 w-10 h-10 rounded-tr-md rounded-br-md " inputClassName=" placeholder:pl-2 placeholder:text-[#636363] focus:outline-none" />

      <StatusFilter containerClassName="w-30 border border-stone-400 h-full flex items-center rounded-md bg-white" selectClassName="w-full text-[#636363] focus:outline-none"/>

      <DatePicker constinerClassName="w-30 border border-stone-400 h-full flex items-center rounded-md bg-white flex flex-row items-center px-2" placeholder="Created" inputClassName="w-[96%] h-full focus:outline-none" iconClassName="text-[#636363]" iconSize={25} />

      <ViewToggle placeholder="Customize Table View" containrerClassName=" w-auto border border-stone-400 h-full flex items-center gap-2 rounded-md bg-white flex flex-row items-center px-2" iconSize={22} iconClassName="text-[#636363]" inputClassName="focus:outline-none"/>
      </div>
   
    </div>
  )
}

export default AlertTooLBar