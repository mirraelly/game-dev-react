import SubscribeForm from '../SubscribeForm/SubscribeForm';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='textWhite footer-container'>
            <section className='footer-box'>
                <div className='footer-box-left'>
                    <div>
                        <h5 className='footer-title'>Links rápidos</h5>
                        <ul className='footer-links'>
                            <li>Quem somos</li>
                            <li>Contato</li>
                            <li>Política de privacidade</li>
                            <li>Termos e condições</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className='footer-title'>Curso</h5>
                        <ul className='footer-links'>
                            <li>Login</li>
                            <li>Download</li>
                            <li>Todos os cursos</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-box-right'>
                    <h5 className='footer-title'>Contato</h5>
                    <ul className='footer-links'>
                        <li>contatos@email.com</li>
                        <li className='icon-container'>
                            <img src={facebook} alt="Facebook's logo" className='icon-2x' />
                            <img src={instagram} alt="Instagram's logo" className='icon-2x' />
                        </li>
                        <li>
                            <SubscribeForm />
                        </li>
                    </ul>
                </div>
            </section>
            <section className='copy'>
                <p>Este site é desenvolvido por GTCoding © 2021</p>
            </section>
        </footer>
    );
};

export default Footer;