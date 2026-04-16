import { createFileRoute } from "@tanstack/react-router"
import Header from "../components/ui/header.tsx"
import Grid from "../components/dashboard/grid.tsx"

export const Route = createFileRoute('/dashboad')({
  component: Dashboard,
})


function Dashboard (){
  return(
    <div  className="bg-[#F4F6F9] w-full h-full"> 
      <Header title="Operational Dashboard"  />
      <Grid/>      
    </div>
  )
}

export default Dashboard