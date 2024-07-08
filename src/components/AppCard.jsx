import PropTypes from 'prop-types';

const AppCard = ({ children }) => {
    return (
        <div className='apps'>
            {children}
        </div>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
AppCard.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppCard;