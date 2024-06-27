import Button from './components/Button';
import CourseInfo from './components/CourseInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Nav from './components/Nav';
import Section from './components/Section';

const App = function app () {
  return (
    <div className='Container'>
      <Button />
      <CourseInfo />
      <Footer />
      <Header />
      <MainContent />
      <Nav />
      <Section />
    </div>
  );
};

export default App;