const variants = {
  accent: {
    title: "block text-sm font-medium text-gray-500 mb-1",
    description: "text-gray-900",
  },
  regular: {
    title: "text-gray-700",
    description: "text-sm text-gray-500",
  },
};

export const TaskDetailItem = ({ variant, title, description }) => {
  const classNames = variants[variant];

  return (
    <div>
      <h6 className={classNames.title}>{title}</h6>
      <p className={classNames.description}>{description}</p>
    </div>
  );
};
