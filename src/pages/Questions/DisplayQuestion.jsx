import React from "react";
import RightSidebar from "../../component/RightSidebar/RightSidebar";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import QuestionDetails from "./QuestionDetails";
const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;
