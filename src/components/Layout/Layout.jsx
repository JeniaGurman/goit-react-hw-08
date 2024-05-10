import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
