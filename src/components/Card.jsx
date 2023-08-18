import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ name, image }) {
  Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
  }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
