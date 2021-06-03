import PropTypes from 'prop-types';

function SectionDescription({ children }) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-gray-600">{children}</p>
  );
}

SectionDescription.propTypes = {
  children: PropTypes.node,
};

export default SectionDescription;
