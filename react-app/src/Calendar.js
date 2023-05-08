// src/Calendar.js
import React, { useEffect } from 'react';

function Calendar() {
  useEffect(() => {
    document.title = 'Calendar - TimeScheduler';
  }, []);

  return (
    <div>
      <h1>Calendar Page</h1>
    </div>
  );
}

export default Calendar;
