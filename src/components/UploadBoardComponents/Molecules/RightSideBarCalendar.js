import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import dayjs from "dayjs";

function RightSideBarCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
          formatDay={(l, d) => dayjs(d).format("D")}
        />
      </div>
    </div>
  );
}

export default RightSideBarCalendar;
