import { createContext  } from "react"

export type Status = "New" | "Review" | "Assigned" | "Resolved";
export type SeverityLevel = "Critical" | "High" | "Low" | 'Medium' 
export type Zone = "Zone A" | "Zone B" | "Zone C"

export interface Alert {
  id: string;
  alert: string;
  status: Status;
  time: string;
  severityLevel: SeverityLevel;
  assignedTo: string | null;
  zone: Zone;
  camera: string;
  date: string;
  updated: string;
  action: string | null;
  age: string;
}
   const ageParseToSeconds = (age: string) : number =>{
    const [time , unit] = age.split(' ')
    if(unit === 'min'){
       return parseInt(time) * 60 ;
    } else{
      return parseInt(time)
    }
  }

//context type 
interface alertsContextType {
  alerts : Alert[];
  ageParseToSeconds: (age: string) => number; 
  statuses: Status[];
}

export const alertsContext = createContext<alertsContextType | null>(null);


function AlertsContext({ children }: { children: React.ReactNode }) {



const alerts: Alert[] = [
    {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Critical',
    assignedTo: 'John Doe',
    zone: 'Zone A',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '2 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Critical',
    assignedTo: 'Sarah Kim',
    zone: 'Zone A',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '5 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Medium',
    assignedTo: null,
    zone: 'Zone B',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '5 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'High',
    assignedTo: 'Mike Ross',
    zone: 'Zone A',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '10 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Low',
    assignedTo: 'Admin',
    zone: 'Zone B',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '10 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Critical',
    assignedTo: null,
    zone: 'Zone C',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '30 sec',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Critical',
    assignedTo: 'Admin',
    zone: 'Zone B',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '30 sec',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Low',
    assignedTo: null,
    zone: 'Zone B',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '14 min',
    updated: '14.07.2021',
    action: null,
  },
  {
    id: '#GJH23',
    alert: 'Intrusion — Gate 3',
    status: 'New',
    time: '10:30AM',
    severityLevel: 'Low',
    assignedTo: 'Sarah Kim',
    zone: 'Zone C',
    camera: 'Cam42',
    date: '14.07.2021',
    age: '17 min',
    updated: '14.07.2021',
    action: null,
  },
]

const statuses: Status[] = ["New", "Review", "Assigned", "Resolved"];



  return(
    <alertsContext.Provider value = {{alerts , ageParseToSeconds , statuses }}>
      {children}
    </alertsContext.Provider>
  )
}

export default AlertsContext