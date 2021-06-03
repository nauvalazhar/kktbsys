import PropTypes from 'prop-types';

function IllustrationCard({ title, description, image }) {
  return (
    <div className="text-center">
      <img src={image} alt={title} className="mb-4 rounded object-cover" />
      <h2 className="text-xl font-semibold text-primary-900">{title}</h2>
      <p className="mt-2 text-primary-900/60">{description}</p>
    </div>
  );
}

IllustrationCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default IllustrationCard;
