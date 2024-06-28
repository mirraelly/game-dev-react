import Button from './Button';
import Baloon from './Baloon';

const CourseInfo = () => {
    return (
        <section className="firtSection">
            <section>
                <h1>Aprenda a Arte do Game Dev</h1>
                <p>Este é um curso abrangente sobre Desenvolvimento de Jogos.
                    Você aprenderá tudo, desde gerar uma ideia até publicar seus jogos em diferentes plataformas.</p>

                <Button />
            </section>
            <section>
                <Baloon />
                <Baloon />
            </section>
            <section>
                <img src="./assets/images/hero-image.svg" alt="White woman smiling. She is dressed in a checkered blouse and wearing glasses. She is also wearing a backpack on her back and is holding some books with her left arm and hand, and making a 'thumbs up' sign with her right hand." />
            </section>
        </section>
    );
};

export default CourseInfo;