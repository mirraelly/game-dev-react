import PropTypes from 'prop-types';

const TestemunhalCard = ({ children }) => {
    return (
        <div className='testemunhal'>
            {children}
        </div>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
TestemunhalCard.propTypes = {
    children: PropTypes.node.isRequired
}

export default TestemunhalCard;