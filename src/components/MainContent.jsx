import Section from './Section';
import CourseInfo from './CourseInfo';
import '../styles/MainContent.css';
import Menu from './Menu';

const MainContent = () => {
    return (
        <>
            <Section>
                <CourseInfo />
            </Section>
           <Menu />
            {/* <Section></Section>
            <Section></Section>
            <Section></Section> */}
        </>
    );

};

export default MainContent;