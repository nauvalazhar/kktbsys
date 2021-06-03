import PropTypes from 'prop-types';

function FooterLink({ children, href }) {
  return (
    <a
      href={href}
      className="inline-block mb-2 text-lg text-white hover:text-opacity-100 transition text-opacity-70">
      {children}
    </a>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default FooterLink;
