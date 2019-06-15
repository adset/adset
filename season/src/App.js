import React from 'react';

import Weeks from './components/WeekDay';

import './App.css';

function App() {
  const weekDay = [
    {
    day: 'sun',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'mon',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'tues',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'wed',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'thurs',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'fri',
    weather: 'sunny',
    c: '20C'
  },
  {
    day: 'sat',
    weather: 'sunny',
    c: '20C'
  },
];
  return (
    <div className="App">
      <Weeks weekDay={weekDay} />
    </div>
  );
}

export default App;