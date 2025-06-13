import ColorPicker from './ColorPicker';
import PropTypes from 'prop-types';

const Header = ({ chatterNames, chatterOneColor, chatterTwoColor, setTextColors, likedCount }) => {
  return (
    <header>
      <h1>Chat between {chatterNames[0]} and {chatterNames[1]}</h1>
      <div className={'container'}>
        <ColorPicker
          id={0}
          name={chatterNames[1]}
          color={chatterOneColor}
          setTextColors={setTextColors}
        />
        <h2 className="item">{likedCount} ❤️s</h2>
        <ColorPicker
          id={1}
          name={chatterNames[0]}
          color={chatterTwoColor}
          setTextColors={setTextColors}
        />
      </div>
    </header>
  );
};

Header.PropTypes = {
  chatterNames: PropTypes.arrayOf(PropTypes.string),
  chatterOneColor: PropTypes.string,
  chatterTwoColor: PropTypes.string,
  setTextColors: PropTypes.func,
  likedCount: PropTypes.number,
};

export default Header;