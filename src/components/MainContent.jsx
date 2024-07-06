import Section from './Section';
import CourseInfo from './CourseInfo';
import '../styles/MainContent.css';
import Menu from './Menu';
import TestemunhalInfo from './TestemunhalInfo';

const MainContent = () => {
    return (
        <>
            <Section>
                <CourseInfo />
            </Section>
           <Menu />
            <Section>
                <TestemunhalInfo />
            </Section>
            {/* <Section></Section>
            <Section></Section> */}
        </>
    );

};

export default MainContent;