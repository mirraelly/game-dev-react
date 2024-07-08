import Section from './Section';
import CourseInfo from './CourseInfo';
import '../styles/MainContent.css';
import TestemunhalInfo from './TestemunhalInfo';
import CardInfo from './CardInfo';
import AppInfo from './AppInfo';

const MainContent = () => {
    return (
        <>
            <Section>
                <CourseInfo />
            </Section>
            <Section>
                <TestemunhalInfo />
            </Section>
            <Section>
                <CardInfo />
            </Section>
            <Section>
                <AppInfo/>
            </Section>
        </>
    );

};

export default MainContent;