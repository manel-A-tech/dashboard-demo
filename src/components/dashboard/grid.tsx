import AlertType from "./alertType"
import AlertVolum from "./alertVolum"
import StatCards from "./statCards"
import AlertsList from "./alertsList"
import AlertsContext from "../../context/alertsContext"

function Grid(){
  return(
    <div className="pt-5 pl-4 pr-4 gap-4 grid grid-cols-12 bg-[#F4F6F9]">
      <AlertsContext>
        <StatCards/>
        <AlertVolum/>
        <AlertType/>
        <AlertsList/>
      </AlertsContext>
    </div>
  )
}

export default Grid