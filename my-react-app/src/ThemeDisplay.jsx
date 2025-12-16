import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeDisplay() {
  // 3. Käytetään useContextia lukemaan teeman arvo
  const theme = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === 'light' ? '#fff' : '#242424',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '300px'
    }}>
      <p>Nykyinen teema: {theme}</p>
    </div>
  );
}

export default ThemeDisplay;
