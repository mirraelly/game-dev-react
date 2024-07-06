import Section from './Section';
import CourseInfo from './CourseInfo';
import '../styles/MainContent.css';
import TestemunhalInfo from './TestemunhalInfo';

const MainContent = () => {
    return (
        <>
            <Section>
                <CourseInfo />
            </Section>
            <Section>
                <TestemunhalInfo />
            </Section>
            {/* <Section></Section>
            <Section></Section> */}
        </>
    );

};

export default MainContent;