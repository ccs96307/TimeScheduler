// src/Overview.js
import React, { useEffect } from 'react';

function Overview() {
  useEffect(() => {
    document.title = 'Overview - TimeScheduler';
  }, []);

  return (
    <div>
      <h1>Overview Page</h1>
    </div>
  );
}

export default Overview;
