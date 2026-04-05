import { RiPieChart2Fill } from 'react-icons/ri'
import { AreaChart, Area, XAxis, YAxis, Tooltip,CartesianGrid, ResponsiveContainer } from "recharts"

function AlertVolum(){

  interface alertVolumData {time: string ; critical: number ; warning: number ; info: number }
  const data: alertVolumData[] = [
  { time: "00:00", critical: 4,  warning: 10, info: 18 },
  { time: "01:00", critical: 5,  warning: 8,  info: 15 },
  { time: "02:00", critical: 3,  warning: 9,  info: 13 },
  { time: "03:00", critical: 6,  warning: 11, info: 14 },
  { time: "04:00", critical: 6,  warning: 12, info: 20 },
  { time: "05:00", critical: 8,  warning: 15, info: 25 },
  { time: "06:00", critical: 18, warning: 20, info: 28 },
  { time: "07:00", critical: 15, warning: 23, info: 30 },
  { time: "08:00", critical: 10, warning: 18, info: 27 },
  { time: "09:00", critical: 14, warning: 19, info: 25 },
  { time: "10:00", critical: 15, warning: 20, info: 26 },
  { time: "11:00", critical: 10, warning: 17, info: 23 },
]
  return(
    <div className=" col-span-8 bg-white rounded">
      <div className="flex flex-row justify-between items-center h-13.75 pr-4 pl-4  " >
        <div className='flex flex-row justify-items-start items-center gap-1'>
          <RiPieChart2Fill/>
          <h3 className='text-[17px] font-medieum'>Alert Volum</h3>
        </div>
        <button className=" text-white text-[16px] font-light bg-[#6F58C9] h-10 w-35 rounded ">View Analytics</button>
      </div>

      <div className='h-75 flex items-center '>
        <ResponsiveContainer width="95%" >
          <AreaChart data= {data}>
          <XAxis dataKey='time'/>
          <YAxis/>
          <CartesianGrid />
          <Area type='monotone' dataKey='critical' stroke='#DC3545' dot={{ r: 3 , fill: '#DC3545' }} fill="url(#critical)"/>
          <Area type='monotone' dataKey='warning' stroke='#f59e0b' dot={{ r: 3 , fill: '#f59e0b'}} fill="url(#warning)"/>
          <Area type='monotone' dataKey='info' stroke='#3b82f6' dot={{ r: 3 , fill: '#3b82f6'}} fill="url(#info)" />

           <defs>
            <linearGradient id='critical' x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#DC3545" stopOpacity={0.5} />
              <stop offset="90%" stopColor="#DC3545" stopOpacity={0} />
            </linearGradient>
           </defs>

           <defs>
            <linearGradient id='warning' x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
           </defs>

           <defs>
            <linearGradient id='info' x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
           </defs>
           <Tooltip/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AlertVolum