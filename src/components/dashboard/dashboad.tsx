import Grid from "./grid"
import TopBar from "./topBar"

function Dashboard (){
  return(
    <div  className="bg-[#F4F6F9]">
      <TopBar/>
      <h1 className="pl-4 pt-3.5 text-[28px] font-semibold text-[#212529]">Operational Dashboard</h1>
      <Grid/>      
    </div>
  )
}

export default Dashboard