export const MainTitleBlock = ({ className = "", title, subtitle = "" }) => {
  return (
    <div className={className}>
      <h2 className="mb-2 text-3xl font-bold text-gray-900">{title}</h2>
      {!!subtitle && <h3 className="text-gray-600">{subtitle}</h3>}
    </div>
  );
};
