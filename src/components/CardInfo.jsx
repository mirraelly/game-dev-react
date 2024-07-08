import CoursCard from "./CoursCard";
import mario from '../assets/images/mario-game.svg';
import clock from '../assets/images/clock.svg';
import gameStick from '../assets/images/stick-game.svg';
import Button from "./Button";
import "../styles/CardInfo.css";

const CardInfo = () => {
    return (
        <section className="thirdSection">
            <h1 className="textWhite our-course-h1">Nossos cursos</h1>
            <section className="textBlue container-coursCard">
                <div className="decorative-coursCard">
                    <CoursCard className="cours-card">
                        <section className="card-box-game rounded-edge">
                            <figure>
                                <img src={mario} alt="Mario game flyer" className="game-img mario-game-img rounded-edge" />
                                <figcaption>
                                    <h4>Fundamentos do design de jogos</h4>
                                    <div className="card-caption-div">
                                        <img src={clock} alt="clock" className="icon" />
                                        <p className="card-caption-p">8 HRS</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </section>
                    </CoursCard>
                </div>
                <div className="decorative-coursCard">
                    <CoursCard className="cours-card">
                        <section className="card-box-game rounded-edge">
                            <figure>
                                <img src={gameStick} alt="Game stick" className="game-img stick-game-img rounded-edge" />
                                <figcaption>
                                    <h4>Fundamentos do Unity Game Engine</h4>
                                    <div className="card-caption-div">
                                        <img src={clock} alt="clock" className="icon" />
                                        <p className="card-caption-p" >8 HRS</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </section>
                    </CoursCard>
                </div>
            </section>
            <div className="all-cours">
                <Button className="enrollmentButton">
                    <span className='textWhite'> Todos os cursos</span>
                </Button>
            </div>
        </section>
    );
};

export default CardInfo;