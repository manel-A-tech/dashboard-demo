

function AlertsList(){

type Status = "New" | "Review" | "Assigned" | "Resolved";
interface Alert {
  id: string;
  alert: string;
  status: Status;
  time: string
}

const satusColorMap : Record<Status , string> = {
  New: "bg-red-500 text-white",
  Review: "bg-yellow-400 text-black",
  Assigned: "bg-blue-500 text-white",
  Resolved: "bg-green-500 text-white",
}

const alerts : Alert[] = [
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "New",      time: "2min"  },
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "Review",   time: "14min" },
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "Assigned", time: "15min" },
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "Resolved", time: "20min" },
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "Resolved", time: "20min" },
  { id: "#GJH23", alert: "Intrusion — Zone A / Gate 3", status: "Resolved", time: "20min" }
]


  return(
    <div className="col-span-8 pb-5 bg-white rounded ">
       <div className="h-11.5  pr-4 pl-4 flex items-center">
        <p className="text-[16px]">Latest Alerts</p>
       </div>
      <table className="w-full">
      <thead>
        <tr className="border-b border-t border-gray-200">
          <th className="text-left p-4 text-[14px] font-bold">Alert ID</th>
          <th className="text-left p-4 text-[14px] font-bold">Alert</th>
          <th className="text-left p-4 text-[14px] font-bold">Status</th>
          <th className="text-left p-4 text-[14px] font-bold">Time</th>
          <th className="text-left p-4 text-[14px] font-bold">Action</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert, index) => (
          <tr key={index} className="border-b border-gray-100">
            <td className="p-4 text-[14px]">{alert.id}</td>
            <td className="p-4 text-[14px]">{alert.alert}</td>
            <td className={`p-4 text-[14px] `}>
              <span className={`px-2 py-1  rounded text-sm ${satusColorMap[alert.status]}`}>{alert.status}</span>
            </td>
            <td className="p-4 text-[14px]">{alert.time}</td>
            <td className="p-4 text-[14px]"></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default AlertsList