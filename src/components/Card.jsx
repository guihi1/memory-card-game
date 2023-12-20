import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ name, image, handleClick }) {
  Card.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    handleClick: PropTypes.func,
  }

  return (
    <div className='card' onClick={() => handleClick(name)}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
