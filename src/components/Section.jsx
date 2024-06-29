import PropTypes from 'prop-types';

// Use Prop
const Section = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
Section.propTypes = {
    children: PropTypes.node.isRequired
}

export default Section;