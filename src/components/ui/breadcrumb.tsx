import { MdChevronRight } from 'react-icons/md'

type BreadcrumbItem = {
  label?: string
  onClick?: () => void
}
type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <div key={index} className="flex items-center gap-1">
            {item.onClick ? (
              <button onClick={item.onClick} className="text-blue-500 hover:underline">
                {item.label}
              </button>
            ) : (
              <span className={isLast ? "text-stone-600" : "text-blue-500"}>
                {item.label}
              </span>
            )}
            {!isLast && <MdChevronRight className="text-stone-400" />}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumb