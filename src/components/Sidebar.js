import React, { useState } from "react";
import logo from "../logo.png"

import Schedule from "./Schedule";
import MyPage from "./MyPage";

const SideBar = ({ renderComponent }) => {
  const [activeComponent, setActiveComponent] = useState("schedule");

  return (
    <aside>
      <div className="toggle">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2>
            HAK<span className="danger">LOOT</span>
          </h2>
        </div>
        <div
          className="close"
          id="close-btn"
          onClick={() => {
            const sideMenu = document.querySelector("aside");
            sideMenu.style.display = "none";
          }}
        >
          <span className="material-icons-sharp"> close </span>
        </div>
      </div>

      <div className="sidebar">
        <a
          className={activeComponent === "schedule" ? "active" : ""}
          onClick={() => {
            setActiveComponent("schedule");
            renderComponent(<Schedule />);
          }}
        >
          <span className="material-icons-sharp"> calendar_month </span>
          <h3>수행평가 일정 보기</h3>
        </a>

        <a
          className={activeComponent === "add" ? "active" : ""}
          onClick={() => {
            setActiveComponent("add");
            renderComponent();
          }}
        >
          <span className="material-icons-sharp"> add </span>
          <h3>수행평가 추가하기</h3>
        </a>

        <a
          className={activeComponent === "myPage" ? "active" : ""}
          onClick={() => {
            setActiveComponent("myPage");
            renderComponent(<MyPage />);
          }}
        >
          <span className="material-icons-sharp"> person </span>
          <h3>마이페이지</h3>
          {/* <span className="message-count"></span> */}
        </a>

        <a>
          {/* <span className="material-icons-sharp"> logout </span> */}
          <h3>HAKLOOT</h3>
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
