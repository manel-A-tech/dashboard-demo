import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from "recharts"

function AlertType (){
  interface alertTypeData  {name : string ; value: number}
  const data: alertTypeData[] = [
  { name: "Chrome",    value: 35 },
  { name: "IE",        value: 20 },
  { name: "FireFox",   value: 15 },
  { name: "Safari",    value: 20 },
  { name: "Opera",     value: 7  },
  { name: "Navigator", value: 3  },
]
  const colors : string[] = ["#ef4444", "#22c55e", "#eab308", "#38bdf8", "#3b82f6", "#9ca3af"]  // index 0 is Chrome (red), index 1 is IE (green), and so on.
  return (
    <div className=" col-span-4 bg-white rounded">
       <div className=' h-13.75 pr-4 pl-4 flex items-center'>       
        <h3 className='text-[17px] font-medieum'>Alert Type Breakdown</h3>
       </div>
        <div className="h-75 ">
          <ResponsiveContainer width='95%'>
        <PieChart>
          <Pie data={data} dataKey='value' nameKey='name' outerRadius={100}  innerRadius={40}>
            {
              data.map((_, index)=>(
                <Cell key={index} fill={colors[index]} />
              ))
            } 
          </Pie>
          <Legend layout="vertical"  align="right"
            verticalAlign="middle"  iconType="circle"/>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
        </div>
       
    </div>
  )
}

export default AlertType