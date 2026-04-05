
import type { ReactNode } from "react"
import { FiAlertCircle , FiBarChart2 , FiZapOff , FiAperture } from "react-icons/fi";

function StatCards (){
  return(
    
    <div className="contents">
      
    <Card title="OPEN ALERTS"
  value="14"
  subtitle="3 vs yesterday"
  color="red"
  icon={<FiAlertCircle size={30} />}/>
      <Card title="RESOLVED TODAY"
  value="27"
  subtitle="avg 2.1h handling"
  color="green"
  icon={<FiBarChart2  size={30}/>}/>
      <Card  title="FALSE POSITIVE RATE"
  value="11%"
  subtitle="down from 18% last week"
  color="yellow"
  icon={<FiZapOff size={30}/>}/>
      <Card title="CAMERAS ONLINE"
  value="18/20"
  subtitle="2 offline - Zone B"
  color="teal"
  icon={<FiAperture size={30}/>}/>
    </div>
  )
}

export default StatCards

const Card  = ({
  title , 
  value , 
  subtitle,
  color, 
  icon
}:{
  title: string ; 
  value: string ;
  subtitle: string;
  color: string;
  icon: ReactNode
}) => {
    const colorMap: Record<string, string> = {
    red: "#DC3545",
    green: "#28A745",
    yellow: "#FFC107",
    teal: "#17A2B8",
  }
  return <div style={{ backgroundColor: colorMap[color] }} className=' p-4 col-span-3 text-white flex flex-row justify-between items-center rounded '>
   <div>
     <p className="text-[16px]">{title}</p>
     <p className="text-[32px] font-semibold ">{value}</p >
     <p className="text-[16px]">{subtitle}</p>
   </div>
   <div className="opacity-50 ">
     {icon}
   </div>
  </div>
}




