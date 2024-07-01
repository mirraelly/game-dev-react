import Nav from './Nav';
import logo from '../assets/images/logo.svg'

const Header = () => {
    return (
        <div className='cabecalho'>
            <img src={logo} alt="Game Dev's logo" className='icon' />
            <Nav />
        </div>
    );
};

export default Header;