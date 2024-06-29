import Button from './Button';
import Baloon from './Baloon';
import star from '../assets/images/star-icon.svg';
import hero from '../assets/images/hero-image.svg';
import pencilIcon from '../assets/images/pencilIcon.svg'

const CourseInfo = () => {
    return (
        <section className="firtSection">
            <section className='leftSide'>
                <h1>Aprenda a Arte do Game Dev</h1>
                <p>Este é um curso abrangente sobre Desenvolvimento de Jogos.
                    Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.</p>
                <Button className="enrollmentButton">
                    <img src={pencilIcon} alt="Enrollment's icon" id='pencilIcon' />
                    <span>Inscreva-se agora</span>
                </Button>
            </section>
            <section className='middle'>
                <Baloon>
                    <h2>32K</h2>
                    <p>Alunos Matriculados</p>
                </Baloon>
                <Baloon>
                    <h2>4.7 <img src={star} alt="star--v1" /></h2>
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