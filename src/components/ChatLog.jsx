import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, likedCount, setLikedCount }) => {
  const remote = entries[0].sender;

  const entriesElements = entries.map(entry => {
    return <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      likedCount={likedCount}
      setLikedCount={setLikedCount}
      remote={remote}
    />;
  });

  return entriesElements;
};

ChatLog.PropTypes = {
  likedCount: PropTypes.number,
  setLikedCount: PropTypes.func,
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool
  }))
};

export default ChatLog;