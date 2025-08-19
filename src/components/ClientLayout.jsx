"use client";

import { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

export default function ClientLayout({ children }) {
  //   const pathname = usePathname();
  //   const isHomePage = pathname === "/";
  //   const isLoginPage = pathname === "/login";
  //   const isResPage = pathname === "/registartion";
  //   const isProductPage = pathname === "/productList";

  //   const user =
  //     typeof window !== "undefined" ? localStorage.getItem("token") : null;

  //   const isAuthenticated =
  //     user !== null && user !== undefined && user !== "null";

  //   console.log("Authenticated:", isAuthenticated);

  //   if (isHomePage) {
  //     return (
  //       <>
  //         <Navbar />
  //         {children}
  //         <Footer />
  //       </>
  //     );
  //   }
  //   if (isLoginPage || isResPage) {
  //     return <>{children}</>;
  //   }

  //   if (!user) {
  //     if (isProductPage) {
  //       return (
  //         <div>
  //           <Navbar />
  //           <div className="flex-1 bg-slate-200 p-10 overflow-y-auto">
  //             {children}
  //           </div>
  //           <Footer />
  //         </div>
  //       );
  //     }
  //   }

  return (
    <div className="">
      {/* <Sidebar />
      <div className="flex-1 bg-slate-200 px-10 py-6 overflow-y-auto">
        {children}
      </div> */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Main content grows to take available space */}
        <main className="flex-1">{children}</main>

        <Newsletter/>
        <Footer />
      </div>
    </div>
  );
}
