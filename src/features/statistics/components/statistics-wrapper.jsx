import { ShadowBlock } from "shared/components/ui/blocks/shadow-block";

export const StatisticsWrapper = ({ title, btn, children }) => {
  return (
    <ShadowBlock className="p-6">
      <div className="flex justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {btn}
      </div>
      {children}
    </ShadowBlock>
  );
};
