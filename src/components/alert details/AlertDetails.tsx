import LiveFeed from "./liveFeed"
import StatusVerification from "./statusVerification"

type AlertDetailsprops ={
 
  camera: string  ,
  zone : string 
}

function AlertDetails({ camera , zone} : AlertDetailsprops){
  return(
    <div className="pt-5 pl-4 pr-4 gap-4 grid grid-cols-12 bg-[#F4F6F9]">
     
      <LiveFeed  zone={zone} camera={camera}/>
      <StatusVerification/>
    </div>
  )
}

export default AlertDetails