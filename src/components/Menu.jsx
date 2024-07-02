import '../styles/Menu.css';
import x from '../assets/images/x.svg';
import menu from '../assets/images/menu.svg';
import { useState } from 'react';

const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <a id='responsiveMenu' onClick={() => { setOpen(true) }}>
                <img src={menu} alt="Hamburguer Menu" className='icon-4x' />
            </a>
            <section className={`menu ${open ? 'open' : ''}`}>
                <div>
                    <img src={x} alt="Close button" className='icon-4x' onClick={() => { setOpen(false) }} />
                </div>
                <nav className='nav-seconde-menu'>
                    <ul className='textWhite seconde-menu-options'>
                        <li>Sobre</li>
                        <li>Serviços</li>
                        <li>Nosso Trabalho</li>
                        <li className='enrollment'>Inscreva-se agora</li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Menu;