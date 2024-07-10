import PropTypes from 'prop-types';

// Use Prop
const Section = ({ children, className }) => {
    return (
        <section className={className}>
            {children}
        </section>
    );
};

// Declare prop types (make children required)
// Use node because it supports single or multiple children
Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
}

export default Section;