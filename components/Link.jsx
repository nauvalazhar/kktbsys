// import { Link } from 'react-router-dom';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LinkElement({ href, className, children, ...props }) {
  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
}

LinkElement.defaultProps = {
  href: '/',
};

LinkElement.propTypes = {
  /** Page path */
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default LinkElement;
