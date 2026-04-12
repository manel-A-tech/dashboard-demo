
import AlertTable from '../components/alertManegement/alertTable'
import AlertTooLBar from '../components/alertManegement/alertToolBar'
import Header from '../components/ui/header'
import Breadcrumb from '../components/ui/breadcrumb'
import { alertsContext } from '../context/alertsContext'
import SeverityBadge from '../components/ui/severityBadge'
import StatusBadge from '../components/ui/statusBadge'
import { createFileRoute, useSearch, useNavigate } from '@tanstack/react-router'
import { useContext } from 'react'
/*
export const Route = createFileRoute('/alertManagementPage')({
  //the search parameter we expect is selectedAlertId
  validateSearch: (search: Record<string, unknown>) => ({
    selectedAlertId: search.selectedAlertId as string | undefined,
  }),
  component: AlertManagementPage,
})*/

export type AlertManagementSearch = {
  selectedAlertId?: string
}

// In your route file, change the validation to allow undefined
export const Route = createFileRoute('/alertManagementPage')({
  validateSearch: (search: Record<string, unknown>): AlertManagementSearch => ({
    selectedAlertId: search.selectedAlertId as string | undefined,
  }),
  component: AlertManagementPage,
})

function AlertManagementPage() {
  const { selectedAlertId } = useSearch({ from: '/alertManagementPage' })
  const navigate = useNavigate()
  const context = useContext(alertsContext)

  // selecting an alert 
  const selectedAlert = context?.alerts[Number(selectedAlertId)]



const breadcrumbItems = selectedAlertId
  ? [
      {
        label: 'Alert Management',
        onClick: () => navigate({ 
          to: '/alertManagementPage',
          replace: true 
        }),
      },
      { label: selectedAlert?.alert ?? 'Alert Detail' },
    ]
  : []
  //const search = useSearch({ from: '/alertManagementPage' })
  // console.log('Search type:', search)

  return (
    
    <div className="bg-[#F4F6F9] min-h-screen">
      <Header
        title="Alert Management"
        subtitle="Real time Alert monitoring and assessment"
      />
      <div className="px-6 py-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {selectedAlertId && selectedAlert ? (
        <div className="bg-white  p-3 ">
          <div>
            <p className="text-s text-stone-400">Alert ID</p>
            <p className="font-semibold">{selectedAlert.id}</p>
          </div>
          <div>
            <p className="text-s text-stone-400">Status</p>
            <StatusBadge status={selectedAlert.status} />
          </div>
          <div>
            <p className="text-s text-stone-400">Severity</p>
            <SeverityBadge severityLevel={selectedAlert.severityLevel} />
          </div>
          <div>
            <p className="text-s text-stone-400">Assigned To</p>
            <p className="font-semibold">{selectedAlert.assignedTo || '—'}</p>
          </div>
          <div>
            <p className="text-s text-stone-400">Zone</p>
            <p className="font-semibold">{selectedAlert.zone}</p>
          </div>
          <div>
            <p className="text-s text-stone-400">Camera</p>
            <p className="font-semibold">{selectedAlert.camera}</p>
          </div>
          <div>
            <p className="text-s text-stone-400">Date</p>
            <p className="font-semibold">{selectedAlert.date}</p>
          </div>
          <div>
            <p className="text-s text-stone-400">Age</p>
            <p className="font-semibold">{selectedAlert.age}</p>
          </div>
        </div>
      ) : (
        <>
          <AlertTooLBar />
          <AlertTable />
        </>
      )}
    </div>
  )
}

// At the bottom of alertManagementPage.tsx
