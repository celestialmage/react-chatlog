import './ChatEntry.css';
import './TimeStamp';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = ({ sender, body, timeStamp, liked, adjustLikedCount, remote }) => {
  const [messageLiked, setMessageLiked] = useState(liked);
  const [likedHeart, setLikedHeart] = useState('🤍');

  let classes = 'chat-entry ';

  if (sender === remote) {
    classes += 'remote';
  } else {
    classes += 'local';
  }

  const likeClicked = () => {
    setLikedHeart(messageLiked ? '🤍' : '❤️');
    adjustLikedCount(messageLiked ? true : false);
    setMessageLiked(!messageLiked);
  };

  return (
    <div className={classes}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={likeClicked}>{likedHeart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  adjustLikedCount: PropTypes.func,
  remote: PropTypes.string
};

export default ChatEntry;
