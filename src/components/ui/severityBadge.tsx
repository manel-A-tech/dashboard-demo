import { MdWarning } from "react-icons/md";
import type { SeverityLevel } from "../../context/alertsContext";
import type { ReactNode } from "react";

const severityConfig: Record<SeverityLevel, { color: string; icon?: ReactNode }> = {
  Critical: { color: "text-red-500", icon: <MdWarning size={16} className="text-red-500" /> },
  High:     { color: "text-red-500" },
  Medium:   { color: "text-orange-400" },
  Low:      { color: "text-yellow-400" },
};

function SeverityBadge({ severityLevel }: { severityLevel: SeverityLevel }) {
  const { color, icon } = severityConfig[severityLevel];

  return (
    <span className={`flex items-center gap-1 ${color}`}>
      {icon}
      {severityLevel}
    </span>
  );
}

export default SeverityBadge;