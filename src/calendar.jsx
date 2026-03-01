import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Habit Calendar</h2>

      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      {selectedDate && (
        <p style={{ marginTop: "20px" }}>
          You selected: {selectedDate.toDateString()}
        </p>
      )}
    </div>
  );
}
