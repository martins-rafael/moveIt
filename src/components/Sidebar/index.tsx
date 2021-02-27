import { FiHome as Home } from 'react-icons/fi';

import { Container, LightSwitch } from './styles';

const Sidebar = () => (
  <Container>
    <img src="/logo.svg" alt="Move.it" />
    <div>
      <Home size={32} />
      <LightSwitch size={32} />
    </div>
  </Container>
);

export default Sidebar;
