type StatusFilterProps={
  containerClassName?: string,
  selectClassName?: string
}

import { alertsContext } from "../../context/alertsContext.tsx"
import { useContext } from "react"

function StatusFilter({containerClassName , selectClassName}:StatusFilterProps){
  const context = useContext(alertsContext)
  const statuses = context?.statuses ?? []
  return(
    <div className={containerClassName}>
      <select className={selectClassName} >
      <option value="all">All</option>
      {statuses.map((status, index)=>(
        <option key={index} value={status}>{status}</option>
      ))}
    </select>
    </div>
  )
}

export default StatusFilter