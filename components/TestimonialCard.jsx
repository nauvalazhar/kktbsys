import PropTypes from 'prop-types';

function TestimonialCard({ testimoni, name, avatar, job }) {
  return (
    <div className="bg-blue-50 p-8 rounded text-center md:text-left">
      <div className="bg-white p-8 rounded-lg">
        <p className="mb-8 text-gray-600">{testimoni}</p>
        <div className="flex flex-col md:flex-row items-center">
          <img
            className="w-14 h-14 object-cover rounded-full flex-shrink-0"
            src={avatar}
            alt="orang"
          />
          <div className="md:ml-4 mt-4 md:mt-0">
            <h2 className="text-lg text-blue-900 font-semibold">{name}</h2>
            <p className="text-gray-600">{job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  testimoni: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  job: PropTypes.string,
};

export default TestimonialCard;
