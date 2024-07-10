import Nav from '../Nav/Nav';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='cabecalho textWhite'>
            <img src={logo} alt="Game Dev's logo" className='logo' />
            <Nav />
        </div>
    );
};

export default Header;