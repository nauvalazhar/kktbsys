import PropTypes from 'prop-types';

function IntroCard({ icon: Icon, title, content, list }) {
  return (
    <div className="flex items-start flex-col md:flex-row bg-blue-50 p-8 rounded mb-4 last:mb-0">
      <Icon className="h-auto w-10 text-blue-500 flex-shrink-0" />
      <div className="md:ml-8 mt-4 md:mt-0">
        <h2 className="text-xl font-semibold text-blue-500">{title}</h2>
        <p className="text-lg text-blue-900/60 mt-1">{content}</p>
        <div className="flex flex-col">
          {list.map(({ title, description }) => (
            <div key={title} className="flex items-start mt-4">
              <div className="w-3 h-3 bg-blue-900 mr-3 mt-2" />
              <div className="ml-2">
                <div className="text-lg font-semibold text-blue-900">
                  {title}
                </div>
                <div className="text-blue-900/60">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

IntroCard.defaultProps = {
  list: [],
};

IntroCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.func,
  list: PropTypes.array,
};

export default IntroCard;
