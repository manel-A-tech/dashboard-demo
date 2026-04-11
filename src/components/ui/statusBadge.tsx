import { type Status } from "../../context/alertsContext"

function StatusBadge({ status }: { status: Status }){

  const statusColorMap: Record<Status, string> = {
    New: "bg-red-500 text-white",
    Review: "bg-yellow-400 text-black",
    Assigned: "bg-blue-500 text-white",
    Resolved: "bg-green-500 text-white",
  }
  return(
    <span className={`px-2 py-1 rounded text-sm ${statusColorMap[status]}`}>
                  {status}
    </span>
  )
}

export default StatusBadge