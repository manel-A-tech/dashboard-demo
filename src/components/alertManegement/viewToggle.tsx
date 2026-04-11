import { MdSettings } from "react-icons/md"

type ViewToggleProps = {
  containrerClassName?: string
  inputClassName ?: string
  placeholder? : string
  iconSize?: number
  iconClassName?: string
}

function ViewToggle({ containrerClassName, inputClassName , placeholder , iconSize , iconClassName}: ViewToggleProps){
  return(
    <div className={containrerClassName}>
      <MdSettings size={iconSize} className={iconClassName}/>
      <input type="text" className={inputClassName} placeholder={placeholder} />
    </div>
  )
}

export default ViewToggle