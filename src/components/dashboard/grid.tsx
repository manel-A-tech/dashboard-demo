import AlertType from "./alertType"
import AlertVolum from "./alertVolum"
import StatCards from "./statCards"
import AlertsList from "./alertsList"

function Grid(){
  return(
    <div className="pt-5 pl-4 pr-4 gap-4 grid grid-cols-12 bg-[#F4F6F9]">
      <StatCards/>
      <AlertVolum/>
      <AlertType/>
      <AlertsList/>
    </div>
  )
}

export default Grid