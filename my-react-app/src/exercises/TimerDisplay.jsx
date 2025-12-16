import { useTimer } from './Timer'; // Tuodaan oma hook sisään

const TimerDisplay = () => {
  // Käytetään custom hookia
  const currentTime = useTimer();

  return (
    <div style={{ textAlign: 'center', fontSize: '2rem', padding: '20px' }}>
      <h2>Kello on nyt:</h2>
      <p>{currentTime}</p>
    </div>
  );
};

export default TimerDisplay;
