import { Link, useMatch } from "react-router-dom";
import { IconLabel } from "../icons/icon-label";

export const TabLink = ({ children, text, to, ...attr }) => {
  const match = useMatch(to);

  const className = match?.pathname === to ? "active" : "";
  return (
    <Link
      className={`btn flex items-center gap-x-2 rounded-lg px-3 py-2 ${className}`}
      to={to}
      {...attr}
    >
      <IconLabel text={text}>{children}</IconLabel>
    </Link>
  );
};
