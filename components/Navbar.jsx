import { Button, Container, Link } from '@components';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function Navbar({ items, logo, rightButtonHref, className, rightButton }) {
  const [collapse, setCollpase] = useState(false);

  useEffect(() => {
    function responsiveNavbar() {
      const vw = window.outerWidth;
      const threshold = 768;

      if (vw <= threshold) setCollpase(true);

      if (vw > threshold) setCollpase(false);
    }

    responsiveNavbar();

    window.addEventListener('resize', responsiveNavbar);
  }, []);

  return (
    <nav
      className={clsx('md:absolute fixed top-0 left-0 w-full z-50', className)}>
      <Container>
        <div className={'flex items-center lg:py-0 py-6'}>
          <div className={'w-3/12'}>
            <Link className={'text-xl font-bold'}>{logo}</Link>
          </div>
          <div
            className={clsx(
              'lg:items-center lg:flex-row lg:w-10/12 flex lg:relative lg:bg-transparent lg:px-0 lg:py-0 md:w-64 px-10 py-16 fixed md:flex flex-col w-full h-full bg-blue-500 top-0 transition-all',
              collapse ? 'right-[-100%]' : 'right-0'
            )}>
            <div className={'flex lg:w-8/12 lg:justify-center w-full'}>
              {/* mobile close */}
              <button
                aria-label="Close Button"
                onClick={() => setCollpase(true)}
                className={
                  'lg:hidden absolute top-0 right-0 mt-8 mr-10 cursor-pointer'
                }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={'w-6 text-white/75'}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul
                className={
                  'flex lg:flex-row lg:items-center lg:my-0 lg:-mx-6 flex-col -my-2'
                }>
                {items.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.href}
                      className={`inline-block lg:mx-6 lg:py-10 py-2 text-white ${
                        item.active
                          ? 'font-bold'
                          : 'text-opacity-75 hover:text-opacity-100'
                      } transition-all`}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                'flex lg:w-4/12 lg:items-center lg:justify-end lg:flex-row lg:mt-0 flex-col text-center mt-auto w-full'
              }>
              <Button
                href={rightButtonHref}
                size="small"
                className={'rounded lg:ml-8 lg:mt-0 mt-4 justify-center'}
                variant="solidBlue"
                {...rightButton}
              />
            </div>
          </div>

          {/* mobile toggler */}
          <button
            aria-label="Hamburger Button"
            onClick={() => setCollpase(false)}
            className={'ml-auto lg:hidden'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={'w-6 text-white fill-current'}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1={3} y1={12} x2={21} y2={12} />
              <line x1={3} y1={6} x2={21} y2={6} />
              <line x1={3} y1={18} x2={21} y2={18} />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
}

Navbar.defaultProps = {
  logo: 'Nauval Ganteng',
  items: [],
  rightButtonChildren: 'Sign Up',
  rightButtonHref: '/',
  rightButtonColor: 'blue',
  className: '',
  rightButton: {},
};

Navbar.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark']),
  items: PropTypes.array,
  rightButtonChildren: PropTypes.string,
  rightButtonHref: PropTypes.string,
  rightButtonColor: PropTypes.string,
  className: PropTypes.string,
  rightButton: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  logo: PropTypes.node,
};

export default Navbar;
