import { useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt } from "react-icons/fa"

type DatePickerProps = {
  constinerClassName? : string
  placeholder?: string
  inputClassName? : string
  iconClassName? : string
  iconSize?: number
}

function DatePicker({constinerClassName , inputClassName , placeholder , iconClassName , iconSize}:DatePickerProps){
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  return(
    <div className={constinerClassName} >
      
      <ReactDatePicker
      openToDate={new Date()}
      selected={selectedDate}
      onChange={(date: Date |null) => setSelectedDate(date)}
      placeholderText={placeholder}
      className={inputClassName}/>
      <FaCalendarAlt className={iconClassName} size={iconSize}/>
    </div>
  )
}

export default DatePicker