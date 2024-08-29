//the aim of this component is to display the header
import './header.css';
import {messages} from '../../messages';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>{messages.headerTitle}</h1>
      </div>
    </header>
  );
};

export default Header;