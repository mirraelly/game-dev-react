import SubscribeForm from './SubscribeForm';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg'

const Footer = () => {
    return (
        <>
            <section>
                <div>
                    <h2>Links rápidos</h2>
                    <ul>
                        <li>Quem somos</li>
                        <li>Contato</li>
                        <li>Política de privacidade</li>
                        <li>Termos e condições</li>
                    </ul>
                </div>
                <div>
                    <h2>Curso</h2>
                    <ul>
                        <li>Login</li>
                        <li>Download</li>
                        <li>Todos os cursos</li>
                    </ul>
                </div>
                <div>
                    <h2>Contato</h2>
                    <ul>
                        <li>contatos@email.com</li>
                        <li>
                            <img src={facebook} alt="Facebook's logo"/>
                            <img src={instagram} alt="Instagram's logo" />
                        </li>
                        <li>
                            <SubscribeForm />
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <p>Este site é desenvolvido por GTCoding © 2021</p>
            </section>
        </>
    );
};

export default Footer;