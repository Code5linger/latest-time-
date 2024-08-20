import React, { useEffect, useState } from 'react';

const appointments = [
  {
    customerName: 'Anandh A',
    endTime: '11:30 PM',
    startTime: '11:00 PM',
    registrantId: '149306039',
    scheduledDate: '08/22/2024', // Latest scheduled date with latest startTime
  },
  {
    customerName: 'Anandh A',
    endTime: '10:30 PM',
    startTime: '10:00 PM',
    registrantId: '149306013',
    scheduledDate: '08/22/2024', // Same date as previous but earlier startTime
  },
  {
    customerName: 'Anandh A',
    endTime: '11:30 AM',
    startTime: '11:00 AM',
    registrantId: '149306045',
    scheduledDate: '08/22/2024', // Earlier date
  },
];

const parseDateTime = (dateStr, timeStr) => {
  return new Date(`${dateStr} ${timeStr}`);
};

const latestAppointment = appointments.sort((a, b) => {
  const dateA = parseDateTime(a.scheduledDate, a.startTime);
  const dateB = parseDateTime(b.scheduledDate, b.startTime);

  return dateB - dateA;
})[0];

function App() {
  const [time, setTime] = useState(new Date());
  console.log(time);

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return (
    <div>
      {latestAppointment && (
        <p>
          test Registrant ID for latest appointment:{' '}
          {latestAppointment.registrantId}
        </p>
      )}
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
