import { FiSearch } from "react-icons/fi"

  type searchBarProps = {
    className? : string,
    placeholder? : string,
    iconClassName? : string,
    iconSize?: number
    inputClassName? : string
  }

function SearchBar({className , placeholder , iconClassName , iconSize , inputClassName } : searchBarProps){

  return(
    
    <div className={className}>
      <input type="text" placeholder={placeholder} className={` bg-transparent  placeholder:text-sm w-full ${inputClassName}`} />
      <div className={`${iconClassName}  flex items-center justify-center shrink-0`}>
        <FiSearch strokeWidth={iconSize} className="text-white"/>
      </div>
    </div>
  )
}

export default SearchBar