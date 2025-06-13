import PropTypes from 'prop-types';

const ColorPicker = ({ id, name, setTextColors }) => {
  return (
    <div className="item">
      <p>{name}'s color:</p>
      <button onClick={() => setTextColors(id, 0)}>⚪</button>
      <button onClick={() => setTextColors(id, 1)}>🔴</button>
      <button onClick={() => setTextColors(id, 2)}>🟠</button>
      <button onClick={() => setTextColors(id, 3)}>🟡</button>
      <button onClick={() => setTextColors(id, 4)}>🟢</button>
      <button onClick={() => setTextColors(id, 5)}>🔵</button>
      <button onClick={() => setTextColors(id, 6)}>🟣</button>
      <button onClick={() => setTextColors(id, 7)}>⚫</button>
    </div>
  );
};

ColorPicker.PropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  setTextColors: PropTypes.func,
};

export default ColorPicker;

