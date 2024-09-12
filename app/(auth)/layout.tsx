import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <h1>This is the layout</h1>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
