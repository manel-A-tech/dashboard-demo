import type { ReactNode } from "react"
import { Link } from '@tanstack/react-router'

function Button(
  { title, icon, to , badge}: { title: string, icon: ReactNode, badge?: ReactNode, to?: string }
) {
  return (
    <div className="bg-transparent flex flex-row gap-2 items-center relative px-3 py-1.5 mx-auto mt-2">
      <Link to={to} className="w-full" >
  {({ isActive }) => (
    <button className={`w-full flex items-center gap-2 text-[16px] px-3 py-1.5
      ${isActive
        ? "bg-[#6F58C9] text-white"
        : "text-[#C2C7D0] hover:bg-[#6F58C9] hover:text-white"
      }`}>
      {icon}
      {title}
      {badge}
    </button>
  )}
</Link>
    </div>
  )
}

export default Button