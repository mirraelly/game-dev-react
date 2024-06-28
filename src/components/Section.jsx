import PropTypes from 'prop-types';

// Use Prop
const Section = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

// Declare prop types (make children required)
Section.propTypes = {
    children: PropTypes.array.isRequired
}

export default Section;