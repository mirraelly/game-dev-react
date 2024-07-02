import '../styles/Header.css';
import menu from '../assets/images/menu.svg';

const Nav = () => {
    return (
        <nav className='menu'>
            <ul className='menuOptions'>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Nosso Trabalho</li>
                <li className='enrollment-btn'>Inscreva-se agora</li>
            </ul>
            <a id='responsiveMenu'>
                <img src= {menu} alt="Hamburguer Menu" className='icon-4x' />
            </a>
        </nav>
    );
};

export default Nav;