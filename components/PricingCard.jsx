import { Button, SectionBadge } from '@components';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi';

function PricingCard({ price, name, description, features, highlight }) {
  return (
    <div
      className={clsx(
        'lg:p-16 p-12 shadow-xl rounded-lg',
        highlight ? 'bg-blue-900' : 'bg-white'
      )}>
      <SectionBadge>{name}</SectionBadge>
      <h2
        className={clsx(
          'mt-6 font-semibold font-mono text-4xl',
          highlight ? 'text-white' : 'text-primary-900'
        )}>
        IDR{price}
      </h2>
      <p
        className={clsx(
          'text-opacity-60 mt-4',
          highlight ? 'text-white/60' : 'text-primary-900'
        )}>
        {description}
      </p>
      <div className="mt-10 space-y-3">
        {features.map((f) => (
          <div
            className={clsx(
              'flex items-center',
              highlight ? 'text-white' : 'text-primary-900'
            )}
            key={f}>
            <div
              className={clsx(
                'w-6 h-6 rounded-full flex items-center justify-center mr-4',
                highlight ? 'bg-green-500/20' : 'bg-green-100'
              )}>
              <HiCheck className="h-auto w-4 text-green-500" />
            </div>
            {f}
          </div>
        ))}
      </div>

      <Button
        variant={highlight ? 'solidYellow' : 'solidBlue'}
        className="mt-10 shadow-dark-sm"
        wide>
        Daftar
      </Button>
    </div>
  );
}

PricingCard.propTypes = {
  price: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  features: PropTypes.array,
  highlight: PropTypes.bool,
};

export default PricingCard;
