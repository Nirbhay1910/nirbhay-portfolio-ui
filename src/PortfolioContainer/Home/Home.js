import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-container" id="Home">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
