import clsx from 'clsx';
import PropTypes from 'prop-types';

function Container({ className, children, ...props }) {
  return (
    <div
      className={clsx(
        'w-full px-10 mx-auto 2xl:w-8/12 xl:w-12/12 lg:px-10',
        className
      )}
      {...props}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
