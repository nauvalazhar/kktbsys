import PropTypes from 'prop-types';

function LangCard({ logo, name }) {
  return (
    <div className="bg-white shadow-xl w-full h-24 rounded-lg flex-shrink-0 flex items-center justify-center p-4 xl:p-8 lg:p-4">
      <img src={logo} alt={name} className="h-14" />
    </div>
  );
}

LangCard.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

export default LangCard;
