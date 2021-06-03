import PropTypes from 'prop-types';

function FooterTitle() {
  return (
    <h2 className="font-semibold tracking-wide text-white uppercase text-opacity-70">
      External
    </h2>
  );
}

FooterTitle.propTypes = {
  children: PropTypes.node,
};

export default FooterTitle;
