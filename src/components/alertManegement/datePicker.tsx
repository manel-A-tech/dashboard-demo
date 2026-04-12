
import { useContext } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendarAlt } from "react-icons/fa"
import { alertsContext } from "../../context/alertsContext"

type DatePickerProps = {
  constinerClassName?: string
  placeholder?: string
  inputClassName?: string
  iconClassName?: string
  iconSize?: number
}

function DatePicker({ constinerClassName, inputClassName, placeholder, iconClassName, iconSize }: DatePickerProps) {
  const ctx = useContext(alertsContext)

  // Fallback: if used outside context, manage state locally
  const selectedDate = ctx?.selectedDate ?? null
  const setSelectedDate = ctx?.setSelectedDate ?? (() => {})

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedDate(null)
  }

  return (
    <div className={constinerClassName}>
      <ReactDatePicker
        openToDate={new Date()}
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        placeholderText={placeholder}
        className={inputClassName}
        isClearable={false}  // we handle clearing ourselves below
      />

      {/* Show a clear "×" button when a date is active, otherwise show the calendar icon */}
      {selectedDate ? (
        <button
          onClick={handleClear}
          title="Clear date filter"
          className="text-[#6F58C9] font-bold leading-none"
          style={{ fontSize: iconSize ? iconSize * 0.8 : 18, lineHeight: 1 }}
        >
          ✕
        </button>
      ) : (
        <FaCalendarAlt className={iconClassName} size={iconSize} />
      )}
    </div>
  )
}

export default DatePicker