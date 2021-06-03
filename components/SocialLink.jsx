import PropTypes from 'prop-types';

function SocialLink({ icon: Icon, name, href }) {
  return (
    <a
      className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full flex-shrink-0 transition-all"
      href={href}
      title={name}>
      <Icon className="h-auto w-4" />
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.func,
  name: PropTypes.string,
};

export default SocialLink;
