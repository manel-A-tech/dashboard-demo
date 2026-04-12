import AlertRow from "./alertRow"
import { useContext, useState } from "react";
import { alertsContext } from "../../context/alertsContext.tsx"
import Pagination from "../ui/pagination.tsx";


function AlertTable(){
    const context = useContext(alertsContext)
    const alerts = context?.filteredAlerts ?? []
    const ageParseToSeconds = context?.ageParseToSeconds

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedAlerts = alerts.slice(startIndex, startIndex + itemsPerPage)

const totalPages = Math.ceil(alerts.length / itemsPerPage)

  return(
    <div className="bg-white pb-5">
      <table className="w-full">
        <thead>
          <tr className="border-b border-t border-gray-200" >
          <th className="text-left p-4 text-[14px] font-bold">Alert ID</th>
          <th className="text-left p-4 text-[14px] font-bold">Camera/Zone</th>
          <th className="text-left p-4 text-[14px] font-bold">Assigned To</th>
          <th className="text-left p-4 text-[14px] font-bold">Zone</th>
          <th className="text-left p-4 text-[14px] font-bold">Status</th>
          <th className="text-left p-4 text-[14px] font-bold">Severity</th>
          <th className="text-left p-4 text-[14px] font-bold">Date</th>
          <th className="text-left p-4 text-[14px] font-bold">Age</th>
          <th className="text-left p-4 text-[14px] font-bold">Updated</th>
          <th className="text-left p-4 text-[14px] font-bold">Actions</th>
        </tr>
        </thead>
         <tbody>
        {paginatedAlerts.sort((a, b) => (ageParseToSeconds?.(a.age) ?? 0) - (ageParseToSeconds?.(b.age) ?? 0)).map((alert , index) => (
          <AlertRow key={alert.id} alert={alert} index={startIndex + index} />
          ))}
      </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages}
      onPageChange={setCurrentPage}/>
    </div>
  )
}


export default AlertTable