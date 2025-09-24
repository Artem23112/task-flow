// components/ui/badge.jsx
import { Calendar, CircleAlert, Clock } from "lucide-react";
import { IconLabel } from "shared/components/ui/icons/icon-label";
import { cn } from "shared/utils/cn";

const variants = {
  priority: {
    high: {
      cn: "bg-red-100 text-red-700 border-red-200",
      text: "Высокий",
      icon: CircleAlert,
    },
    medium: {
      cn: "bg-yellow-100 text-yellow-700 border-yellow-200",
      text: "Средний",
      icon: Clock,
    },
    low: {
      cn: "bg-green-100 text-green-700 border-green-200",
      text: "Низкий",
      icon: Calendar,
    },
  },
  status: {
    completed: {
      cn: "bg-green-100 text-green-700 border-green-200",
      text: "Выполнено",
    },
    active: {
      cn: "bg-yellow-100 text-yellow-700 border-yellow-200",
      text: "В процессе",
    },
  },
};

const baseStyles =
  "border px-2 py-1 rounded-full inline-flex items-center gap-x-1 text-xs font-medium";

export const Badge = ({
  type = "priority",
  value,
  text = "",
  className = "",
}) => {
  const variant = variants[type]?.[value];
  if (!variant) return null;

  const IconComp = variant.icon;

  return (
    <IconLabel
      className={cn(className, baseStyles, variant.cn)}
      text={`${variant.text} ${text}`}
    >
      {IconComp && <IconComp width={16} height={16} />}
    </IconLabel>
  );
};
