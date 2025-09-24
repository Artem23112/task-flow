import { MainTitleBlock } from "shared/components/ui/blocks/main-title-block";
import { cn } from "shared/utils/cn";

export const PageLayout = ({
  className = "",
  cnForTitlesWrapper = "",
  title,
  subtitle = "",
  children,
}) => {
  return (
    <main className={cn("flex-1", className)}>
      <MainTitleBlock
        className={cn("container", cnForTitlesWrapper)}
        title={title}
        subtitle={subtitle}
      />
      {children}
    </main>
  );
};
