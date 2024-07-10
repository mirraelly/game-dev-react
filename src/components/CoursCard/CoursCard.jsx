import PropTypes from 'prop-types';
import "../CoursCard/CoursCard.css"

const CoursCard = ({ children }) => {
    return (
        <div className='cours-card'>
            {children}
        </div>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
CoursCard.propTypes = {
    children: PropTypes.node.isRequired
}

export default CoursCard;

