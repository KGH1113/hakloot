import React, { useState, useEffect } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Swal from "sweetalert2";

import Navbar from "./Navbar";
import { type } from "@testing-library/user-event/dist/type";

const Schedule = () => {
  const [dataLeftList, setDataLeftList] = useState([]);
  const [dataRightList, setDataRightList] = useState([]);

  const [value, onChange] = useState(new Date());

  useEffect(() => {
    fetch("http://localhost:2000/get-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        class_name: "2-12",
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          const rightList = data.map((d, index) => (
            <div key={index} className="content-wraper">
              <div className="contentNav">
                <div className="contentNav-text">
                  <span className="material-icons-sharp content"> person </span>
                  <p>
                    {d.publisherSTN}
                    <br />
                    {d.publisherName}
                  </p>
                </div>
                <div className="contentNav-text">
                  <span className="material-icons-sharp content">
                    {" "}
                    publish{" "}
                  </span>
                  <p>{d.publishDate}</p>
                </div>
              </div>
              <div className="contentMain">
                <div className="contentMain-date">
                  <span className="material-icons-sharp"> calendar_month </span>
                  <p>{d.date}</p>
                </div>
                <p className="info-text">{d.content}</p>
              </div>
            </div>
          ));
          setDataRightList(rightList);

          const specialDates = data.map((d) => new Date(d.date));
          const CalendarCustomTitle = ({ date, view }) => {
            const isSpecialDate = specialDates.some(
              (specialDate) =>
                specialDate.toDateString() === date.toDateString()
            );
            const tileClassName = `day${isSpecialDate ? " has-schedule" : ""}`;
            return <div className={tileClassName}></div>;
          };

          const LeftList = (
            <div
              style={{
                width: `${
                  document.querySelector(".wraper").clientWidth - 50
                }px`,
              }}
            >
              <Calendar
                onChange={onChange}
                value={value}
                onClickDay={(value, event) => {
                  Swal.fire({
                    title: "Date Info",
                    text: `${value.getFullYear()}-${value.getMonth()}-${value.getDate()}`,
                    icon: "info",
                  });
                }}
                formatDay={(locale, date) => date.getDate()}
                tileContent={({ date, view }) => (
                  <CalendarCustomTitle date={date} view={view} />
                )}
              />
            </div>
          );
          setDataLeftList(LeftList);
        });
      }
    });
  }, []);

  return (
    <>
      <main>
        <div className="wraper">
          <h1>일정</h1>
          {dataLeftList}
        </div>
      </main>
      <div className="right-section">
        <Navbar />
        <div className="wraper">{dataRightList}</div>
      </div>
    </>
  );
};

export default Schedule;
