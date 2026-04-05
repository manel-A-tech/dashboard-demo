
import type { ReactNode } from "react"



function Button (
  {title , icon } : {title : string , icon: ReactNode}
){
  return(
  <div className="bg-transparent flex flex-row gap-2 items-center relative px-3 py-1.5  mx-auto mt-2">
    <button className="w-full flex items-center gap-2 text-[#C2C7D0] text-[16px] hover:text-white hover:bg-[#6F58C9] px-3 py-1.5">
     {icon}
     {title}
   </button>
 </div>
  )
}

export default Button