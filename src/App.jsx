import React from 'react';
import Button from './components/Button/Button';
import CourseInfo from './components/CourseInfo';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Nav from './components/Nav';

const App = function app () {
  return (
    <div className='Container'>
      <Button />
      <CourseInfo />
      <Footer />
      <Header />
      <MainContent />
      <Nav />
    </div>
  );
};

export default App;