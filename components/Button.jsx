import PropTypes from 'prop-types';

import Link from './Link';

function Button({
  tagName,
  href,
  children,
  size,
  wide,
  variant,
  className: addClassName,
  external,
  ...props
}) {
  const baseClass = `
        inline-flex
        font-bold
        border-2  
        rounded-lg
        transition-all
    `;

  const sizes = {
    small: 'py-2 px-5',
    normal: 'px-6 py-3',
  };

  const variants = {
    solidBlue: 'text-white bg-blue-500 hover:bg-blue-600 border-transparent',
    solidYellow:
      'text-white bg-yellow-500 hover:bg-yellow-600 border-transparent',
    lightBlue: 'text-blue-500 bg-blue-100 hover:bg-blue-200 border-transparent',
    outlineBlue:
      'text-blue-500 hover:text-white bg-transparent border-blue-500 hover:border-transparent hover:bg-blue-500',
    lightOpacity:
      'text-white bg-blue-400/30 hover:bg-blue-400/50 border-transparent',
  };

  const wideClassName = 'flex w-full justify-center items-center';

  const className = `${baseClass} ${sizes[size]} ${variants[variant]} ${
    wide ? wideClassName : ''
  } ${addClassName}`;

  return (
    <>
      {external ? (
        <a
          className={className}
          href={href}
          {...props}
          target="_blank"
          rel="noreferrer">
          {children}
        </a>
      ) : tagName === 'a' || href ? (
        <Link className={className} href={href} {...props}>
          {children}
        </Link>
      ) : (
        <button className={className} {...props}>
          {children}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  size: 'normal',
  className: '',
  tagName: 'button',
  wide: false,
  variant: 'solid',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'normal']),
  href: PropTypes.string,
  tagName: PropTypes.oneOf(['link', 'button']),
  wide: PropTypes.bool,
  variant: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
};

export default Button;
