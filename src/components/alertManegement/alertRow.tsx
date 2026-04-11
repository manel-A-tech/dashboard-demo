
import { useNavigate, useSearch } from '@tanstack/react-router'
import { MdDelete } from 'react-icons/md'
import { type Alert } from '../../context/alertsContext'
import StatusBadge from '../ui/statusBadge'
import SeverityBadge from '../ui/severityBadge'

function AlertRow({ alert, index }: { alert: Alert, index?: number }) {
  const navigate = useNavigate()
  const search = useSearch({ strict: false }) as { selectedAlertId?: string }
  const isSelected = search.selectedAlertId === String(index)

  const handleRowClick = () => {
    navigate({
      search: (prev) => ({ ...prev, selectedAlertId: String(index) }),
    })
  }

  return (
    <tr
      className={`border-b border-gray-200 text-sm cursor-pointer transition-colors ${
        isSelected ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'hover:bg-stone-100'
      }`}
      onClick={handleRowClick}
    >
      <td className="py-3 px-4 text-[#636363]">{alert.id}</td>
      <td className="py-3 px-4 text-[#636363]">
        <p>{alert.alert}</p>
        <p className="text-[#636363]">{alert.camera} - {alert.time}</p>
      </td>
      <td className="py-3 px-4 text-[#636363]" >{alert.assignedTo || '-'}</td>
      <td className="py-3 px-4 text-[#636363]">{alert.zone}</td>
      <td className="py-3 px-4 text-[#636363]">
        <StatusBadge status={alert.status} />
      </td>
      <td className="py-3 px-4">
        <SeverityBadge severityLevel={alert.severityLevel} />
      </td>
      <td className="py-3 px-4 text-[#636363]">{alert.date}</td>
      <td className="py-3 px-4 text-[#636363]">{alert.age}</td>
      <td className="py-3 px-4 text-[#636363]">{alert.updated}</td>
      <td className="py-3 px-4 ">
        <button
          className="text-stone-400 hover:text-red-500"
          onClick={(e) => e.stopPropagation()}
        >
          <MdDelete size={18} />
        </button>
      </td>
    </tr>
  )
}

export default AlertRow