import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
