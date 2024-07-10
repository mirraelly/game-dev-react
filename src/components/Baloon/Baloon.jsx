import PropTypes from 'prop-types';
import '../CourseInfo/CourseInfo.css';

// Os balões são conteineres para conteúdos flutuantes
const Baloon = ({ children }) => {
    return (
        <div className='baloon'>
           {children}
        </div>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
Baloon.propTypes = {
    children: PropTypes.node.isRequired
}

export default Baloon;