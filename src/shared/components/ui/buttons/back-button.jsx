import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IconLabel } from "shared/components/ui/icons/icon-label";

export const BackButton = ({ text, backLink = "" }) => {
  const navigate = useNavigate();
  const onClick = () => {
    backLink ? navigate(backLink) : navigate(-1);
  };

  return (
    <button onClick={onClick}>
      <IconLabel
        className="text-gray-600 transition-colors hover:text-gray-900"
        text={text}
      >
        <ArrowLeft width={16} />
      </IconLabel>
    </button>
  );
};
