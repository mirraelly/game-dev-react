import '../styles/Menu.css';
import x from '../assets/images/x.svg';

const Menu = () => {
    return (
        <section className='menu'>
            <div>
                    <img src={x} alt="Close button" className='icon-4x' />
                </div>
            <nav>
                <ul className='textWhite seconde-menu-options'>
                    <li>Sobre</li>
                    <li>Serviços</li>
                    <li>Nosso Trabalho</li>
                    <li className='enrollment'>Inscreva-se agora</li>
                </ul>
            </nav>
        </section>
    )
}

export default Menu;