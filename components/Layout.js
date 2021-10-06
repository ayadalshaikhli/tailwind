import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div
      className="flex flex-col justify-between min-h-screen "
      style={{ backgroundColor: "#f0b587" }}
    >
      <Nav />

      <main className=" " style={{ position: "relative" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
