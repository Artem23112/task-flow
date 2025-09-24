import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";

export const TaskDetailWrapper = ({ className = "", text, children }) => {
  return (
    <ShadowBlock className="p-6">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{text}</h3>
      <div className={className}>{children}</div>
    </ShadowBlock>
  );
};
