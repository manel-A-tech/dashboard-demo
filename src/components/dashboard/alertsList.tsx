import { useContext } from "react";
import { alertsContext } from "../../context/alertsContext.tsx"
import StatusBadge from "../ui/statusBadge.tsx";

function AlertsList(){
  const context = useContext(alertsContext)
  const alerts = context?.alerts ?? []
  const ageParseToSeconds = context?.ageParseToSeconds

  return(
    <div className="col-span-8 pb-5 bg-white rounded">
      <div className="h-11.5 pr-4 pl-4 flex items-center">
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
          {alerts.slice(0,5).sort((a, b) => (ageParseToSeconds?.(a.age) ?? 0) - (ageParseToSeconds?.(b.age) ?? 0)).map((alert) => (
            <tr key={alert.id} className="border-b border-gray-100">
              <td className="p-4 text-[14px]">{alert.id}</td>
              <td className="p-4 text-[14px]">{alert.alert}</td>
              <td className="p-4 text-[14px]">
                <StatusBadge status={alert.status} />
              </td>
              <td className="p-4 text-[14px]">{alert.age}</td>
              <td className="p-4 text-[14px]"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AlertsList