import Button from './Button';
import Baloon from './Baloon';
import star from '../assets/images/star-icon.svg';
import hero from '../assets/images/hero-image.svg';
import pencilIcon from '../assets/images/pencilIcon.svg';
import '../styles/CourseInfo.css';

const CourseInfo = () => {
    return (
        <section className="firstSection textBlue">
            <section className='leftSide textWhite' >
                <h2>Aprenda a arte do Game Dev</h2>
                <p className='textSetting'>Este é um curso abrangente sobre Desenvolvimento de Jogos.
                    Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.</p>
                <Button className="enrollmentButton">
                    <img src={pencilIcon} alt="Enrollment's icon" id='pencilIcon' className='icon' />
                    <span className='textSetting'>Inscreva-se agora</span>
                </Button>
            </section>
            <section className='middle'>
                <Baloon>
                    <p className='textBig'>32K</p>
                    <p>Alunos Matriculados</p>
                </Baloon>
                <Baloon>
                    <p className='textBig'>4.7 <img src={star} alt="star--v1" className='icon-4x' /></p>
                    <p>Classificação geral</p>
                </Baloon>
            </section>
            <section className='rightSide'>
                <img src={hero} alt="White woman smiling. She is dressed in a checkered blouse and wearing glasses. She is also wearing a backpack on her back and is holding some books with her left arm and hand, and making a 'thumbs up' sign with her right hand." id='heroImage' />
            </section>
        </section>
    );
};

export default CourseInfo;