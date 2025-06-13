import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, adjustLikedCount, chatterOneColor, chatterTwoColor }) => {
  const remote = entries[0].sender;

  const entriesElements = entries.map(entry => {
    return <ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      adjustLikedCount={adjustLikedCount}
      remote={remote}
      chatterOneColor={chatterOneColor}
      chatterTwoColor={chatterTwoColor}
    />;
  });

  return entriesElements;
};

ChatLog.PropTypes = {
  adjustLikedCount: PropTypes.func,
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string,
    body: PropTypes.string,
    timeStamp: PropTypes.string,
    liked: PropTypes.bool
  })),
  chatterOneColor: PropTypes.string,
  chatterTwoColor: PropTypes.string
};

export default ChatLog;