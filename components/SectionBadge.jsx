import PropTypes from 'prop-types';

function SectionBadge({ children }) {
  return (
    <div className="font-mono mb-3 text-blue-500 uppercase tracking-wider text-sm">
      {children}
    </div>
  );
}

SectionBadge.propTypes = {
  children: PropTypes.node,
};

export default SectionBadge;
