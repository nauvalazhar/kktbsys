import PropTypes from 'prop-types';

function HeroFeature({ title, description, icon: Icon }) {
  return (
    <div className="flex items-start">
      <Icon className="h-auto w-10 flex-shrink-0 text-white/40" />
      <div className="ml-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-white/80 mt-2 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

HeroFeature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  icon: PropTypes.func,
};

export default HeroFeature;
