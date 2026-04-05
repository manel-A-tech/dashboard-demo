import SideBar from "./components/sidebar/sidebar"
import Dashboard from "./components/dashboard/dashboad"

function App() {
  
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <SideBar/>
      <Dashboard/>
    </div>
  )
}

export default App
