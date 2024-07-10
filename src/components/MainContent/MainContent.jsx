import Section from '../Section/Section';
import CourseInfo from '../CourseInfo/CourseInfo';
import '../MainContent/MainContent.css';
import TestemunhalInfo from '../TestemunhalInfo/TestemunhalInfo';
import CardInfo from '../CardInfo/CardInfo';
import AppInfo from '../AppInfo/AppInfo';

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