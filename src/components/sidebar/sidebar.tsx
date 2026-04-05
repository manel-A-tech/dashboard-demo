import Logo from "./logo"
import AccountToggle from "./accountToggle"
import SearchBar from "./searchBar"
import Button from "./button"
import { MdDashboard } from "react-icons/md"
import { MdAnalytics } from "react-icons/md"
import { MdSettings, MdHistory , MdAssignment } from "react-icons/md"
function SideBar(){
  return(
    <div className="bg-[#2A2343]">
      <Logo/>
      <AccountToggle/>
      <SearchBar/>
      <Button title="Dashboard"  icon= <MdDashboard size={22}/> />
      <Button title="Analytics" icon= <MdAnalytics size={22}/> />
      <p className="text-[#C2C7D0] text-[16px] ml-3 mt-2">Administration</p>
      <Button title="Settings"  icon= <MdSettings size={22}/> />
      <Button title="Audit Log" icon= <MdAssignment size={22}/> />
    </div>
  )
}

export default SideBar