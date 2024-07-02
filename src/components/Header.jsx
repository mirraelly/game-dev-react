import Nav from './Nav';
import logo from '../assets/images/logo.svg';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className='cabecalho textWhite'>
            <img src={logo} alt="Game Dev's logo" className='logo' />
            <Nav />
        </div>
    );
};

export default Header;