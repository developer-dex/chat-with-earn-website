import { Suspense } from "react";
import PublicHeader from "./PublicHeader";
import PublicFooter from "./PublicFooter";

type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout = (props: PublicLayoutProps) => {

  const { children } = props;

  return (
    <div>
      <PublicHeader />
      <div>
        <Suspense>
          <div>{children}</div>
        </Suspense>
      </div>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
