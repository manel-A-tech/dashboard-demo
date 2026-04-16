import AiStream from "./aiStream"
import Coordinates from "./coordinates"
import LiveFeed from "./liveFeed"
import StatusVerification from "./statusVerification"

type AlertDetailsprops ={
 
  camera: string  ,
  zone : string 
}

function AlertDetails({ camera , zone} : AlertDetailsprops){
  return(
    <div className=" grid grid-cols-12 bg-[#F4F6F9]">
      <LiveFeed  zone={zone} camera={camera}/>
      <StatusVerification/>
      <AiStream zone={zone}/>
      <Coordinates/>
    </div>
  )
}

export default AlertDetails