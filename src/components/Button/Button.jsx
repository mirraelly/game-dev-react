import PropTypes from 'prop-types';

const Button = ({ children }) => {
    return (
        <div className="enrollment item-3">
            { children }
        </div>
    )
}

// Declare prop types (make children required)
// Use node because it supports single or multiple children
Button.propTypes = {
    children: PropTypes.node.isRequired
}


export default Button;