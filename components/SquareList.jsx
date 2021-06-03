import PropTypes from 'prop-types';

function SquareListItem({ point, children }) {
  return (
    <li className="flex mb-3">
      <div className="flex-shrink-0 w-3 h-3 mt-2 mr-2 bg-blue-500" />
      <span className="text-gray-600">
        <span className="font-semibold text-blue-900">{point}</span> {children}
      </span>
    </li>
  );
}

SquareListItem.propTypes = {
  point: PropTypes.string,
  children: PropTypes.node,
};

export { SquareListItem };

function SquareList({ children }) {
  return <ul className="mt-6 text-lg">{children}</ul>;
}

SquareList.propTypes = {
  children: PropTypes.node,
};

export default SquareList;
