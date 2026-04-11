import Logo from "../ui/logo"
import AccountToggle from "../sidebar/accountToggle"
import SearchBar from "../ui/searchBar"
import Button from "../ui/button"
import { MdDashboard } from "react-icons/md"
import { MdAnalytics } from "react-icons/md"
import { MdSettings,MdAssignment } from "react-icons/md"
import { MdWarning } from "react-icons/md"
import { alertsContext } from "../../context/alertsContext.tsx"
import { useContext } from "react"
import NotifBadge from "../ui/notifBadge.tsx"


function SideBar(){
      const context = useContext(alertsContext)
      const alerts = context?.alerts ?? []
  return(

     <div className="bg-[#2A2343] h-full">
      <Logo/>
      <AccountToggle/>
      <SearchBar className=" bg-[#3F474E]  flex items-center relative px-3 py-1.5 w-[96%] mx-auto rounded-md " placeholder="Search" iconClassName="mr-2 text-stone-300" iconSize={2.5}/>
      <Button title="Dashboard"  icon= <MdDashboard size={22} /> to="/dashboad" />
      <Button title="Alert Management" icon={<MdWarning size={22}/>} to="/alertManagementPage" badge={<NotifBadge notifsnumber={alerts.length} className="bg-[#DC3545] px-2  "/>} />
      
      <Button title="Analytics" icon= <MdAnalytics size={22}/> to="/" />
      <p className="text-[#C2C7D0] text-[16px] ml-3 mt-2">Administration</p>
      <Button title="Settings"  icon= <MdSettings size={22}/>  to="/." />
      <Button title="Audit Log" icon= <MdAssignment size={22}/>  to="/.." />
      
    </div>

  )
}

export default SideBar