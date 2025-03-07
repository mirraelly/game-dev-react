import './TestemunhalInfo.css';
import TestemunhalCard from '../TestemunhalCard/TestemunhalCard';
import photoHer from '../../assets/images/photo-her.svg';
import photoHis from '../../assets/images/photo-his.svg';
import Button from '../Button/Button';

const TestemunhalInfo = () => {

    return (
        <section className="secondSection textBlue">
            <div className='item-1'>
                <div className='decorative-ribbon'></div>
                <section className='testimonials'>
                    <div className='box box-one rounded-edge'>
                        <TestemunhalCard className="firsTestemunhal">
                            <p className='textWhite testimonial-text testemonial-blue'>Este é um ótimo curso. Isso me ajudou muito. Obrigado :&#41;</p>
                            <figure>
                                <img src={photoHer} alt="Woman smiling's photo" className='icon-7x avatar' />
                                <figcaption>
                                    <h6>Jane Cooper</h6>
                                    <p className='font-normal-rale'>Developer, Sony</p>
                                </figcaption>
                            </figure>
                        </TestemunhalCard>
                    </div>
                    <div className='box box-two rounded-edge'>
                        <TestemunhalCard className="secondTestemunhal">
                            <p className='textWhite testimonial-text testemonial-orange'>Trabalho incrível! Muito bem!</p>
                            <figure>
                                <img src={photoHis} alt="Man smiling's photo" className='icon-7x avatar' />
                                <figcaption>
                                    <h6>Jacob Jones</h6>
                                    <p className='font-normal-rale'>Designer, Facebook</p>
                                </figcaption>
                            </figure>
                        </TestemunhalCard>
                    </div>
                </section>
            </div>
            <section className='rigth-text item-2'>
                <div className='col-1'>
                    <h1>O que nossos alunos dizem</h1>
                    <p>Todos os alunos têm acesso a todos os vídeos e também ao código-fonte dos projetos.</p>
                    <p>Você também terá acesso a um canal privado do Discord onde poderá discutir suas dúvidas.</p>
                </div>
                <div className='item-3 col-2'>
                    <Button className="enrollmentButton">
                        <span className='textWhite'> Saiba mais</span>
                    </Button>
                </div>
            </section>
        </section>
    );
};

export default TestemunhalInfo;