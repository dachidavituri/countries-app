import { PropsWithChildren } from "react";

const PageOutlet: React.FC<PropsWithChildren> = ({ children }) => {
  return <div style={{ flex: 1, paddingBottom: 50 }}>{children}</div>;
};
export default PageOutlet;
