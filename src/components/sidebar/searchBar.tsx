import { FiSearch } from "react-icons/fi"

function SearchBar(){
  return(
    
    <div className=" bg-[#3F474E]  flex items-center relative px-3 py-1.5 w-[96%] mx-auto rounded-md ">
      <input type="text" placeholder="Search" className=" bg-transparent placeholder:text-stone-300 placeholder:text-sm w-full" />
      <FiSearch stroke-width={2.5} className="mr-2 text-stone-300"/>
    </div>
  )
}

export default SearchBar