import '../Header/Header.css';
import Menu from '../Menu/Menu';

const Nav = () => {
    return (
        <nav>
            <ul className='menuOptions'>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Nosso Trabalho</li>
                <li className='enrollment-btn'>Inscreva-se agora</li>
            </ul>
            <Menu />
        </nav>
    );
};

export default Nav;