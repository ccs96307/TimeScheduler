// src/Horizon.js
import React, { useEffect } from 'react';

function Horizon() {
  useEffect(() => {
    document.title = 'Horizon - TimeScheduler';
  }, []);

  return (
    <div>
      <h1>Horizon Page</h1>
    </div>
  );
}

export default Horizon;
