import { useContext } from 'react';
import { FiHome as Home } from 'react-icons/fi';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, LightSwitch } from './styles';

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <img src="/logo.svg" alt="Move.it" />
      <div>
        <Home size={32} />
        <LightSwitch activeTheme={theme} onClick={toggleTheme} size={32} />
      </div>
    </Container>
  );
};

export default Sidebar;
