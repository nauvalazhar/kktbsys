import clsx from 'clsx';
import PropTypes from 'prop-types';

function SectionTitle({ children, className }) {
  return (
    <h2
      className={clsx(
        'text-4xl font-light leading-tight text-blue-900',
        className
      )}>
      {children}
    </h2>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SectionTitle;
