import React from "react";
import Header from "$/header";
import Footer from "$/footer";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
