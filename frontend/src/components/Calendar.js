import React, { useState } from 'react'; // Add useState if needed
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function StudyCalendar() {
    const [date, setDate] = useState(new Date()); // Fix for uncontrolled error

    return (
        <div className="calendar">
            <h3>Study Calendar</h3>
            <Calendar onChange={setDate} value={date} />
        </div>
    );
}

export default StudyCalendar;
