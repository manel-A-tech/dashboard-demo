type StatusFilterProps={
  containerClassName?: string,
  selectClassName?: string
}

import { alertsContext, type Status } from "../../context/alertsContext.tsx"
import { useContext } from "react"

function StatusFilter({containerClassName , selectClassName}:StatusFilterProps){
  const context = useContext(alertsContext)
  const statuses = context?.statuses ?? []

  const selectedStatus = context?.selectedStatus ?? null
  const setSelectedStatus = context?.setSelectedStatus ?? (()=>{})
  return(
    <div className={containerClassName}>
      <select
  className={selectClassName}
  value={selectedStatus ?? "all"}
  onChange={(e) => {
    const val = e.target.value
    if (val === "all") {
      setSelectedStatus(null as unknown as Status)
    } else {
      setSelectedStatus(val as Status)
    }
  }}
>
  <option value="all">All</option>
  {statuses.map((status, index) => (
    <option key={index} value={status}>{status}</option>
  ))}
</select>
    </div>
  )
}

export default StatusFilter