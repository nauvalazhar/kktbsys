import PropTypes from 'prop-types';

function IconListItem({ title, description, icon: Icon }) {
  return (
    <li className="flex mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center flex-shrink-0 shadow-lg">
        <Icon className="h-auto w-10 text-blue-100" />
      </div>
      <div className="ml-6">
        <h2 className="text-lg font-semibold text-primary-900">{title}</h2>
        <p className="mt-1 text-base text-gray-600">{description}</p>
      </div>
    </li>
  );
}

IconListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.func,
};

export { IconListItem };

function IconList({ children }) {
  return <ul className="mt-6 text-lg">{children}</ul>;
}

IconList.propTypes = {
  children: PropTypes.node,
};

export default IconList;
