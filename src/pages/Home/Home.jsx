import React from "react";
import "../../App.css";
import HomeMainbar from "../../component/HomeMainbar/HomeMainbar";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
function Home() {
  return (
    <>
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
          <RightSidebar />
          <HomeMainbar />
        </div>
      </div>
    </>
  );
}

export default Home;
