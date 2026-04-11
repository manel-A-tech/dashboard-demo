import { FiSearch, FiMessageSquare, FiBell , FiMaximize , FiGrid } from "react-icons/fi"

function TopBar(){
  return(
    <div className='bg-white rounded-lgborder-b mb-4 p-4 border border-stone-400 h-16 flex items-center justify-between'>
      <div className=" flex gap-5 pl-1 ">
        {/*  */}
        <button className="text-stone-500 font-semibold">☰</button>
        <button className="text-stone-500 ">Home</button>
        <button className="text-stone-500 ">Contact</button>
      </div>

      <div className=" flex gap-5 pr-1 ">
        <button>
          <FiSearch  stroke-width={3} className="mr-2 text-stone-500"/>
        </button>
        <button><FiMessageSquare stroke-width={2.5} className="mr-2 text-stone-500"/></button>
        <button> <FiBell stroke-width={2.5} className="mr-2 text-stone-500"/> </button>
        <button> <FiMaximize stroke-width={2.5} className="mr-2 text-stone-500"/> </button>
        <button> <FiGrid stroke-width={2.5} className="mr-2 text-stone-500"/></button>
      </div>
    </div>
  )
}

export default TopBar