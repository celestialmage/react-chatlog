import './App.css';
import ChatLog from './components/ChatLog';
import Header from './components/Header';
import entries from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [likedCount, setLikedCount] = useState(0);
  const [chatterOneColor, setChatterOneColor] = useState('black');
  const [chatterTwoColor, setChatterTwoColor] = useState('black');
  let chatterNames = [];

  const adjustLikedCount = liked => {
    setLikedCount(count => count = (liked ? count - 1 : count + 1));
  };

  const getSenders = () => {
    let entriesIndex = 0;
    const senders = new Set();

    while (senders.size < 2) {
      const sender = entries[entriesIndex];

      if (!senders.has(sender.sender) || senders.size === 0) {
        senders.add(sender.sender);
      }

      entriesIndex++;
    }

    chatterNames = [...senders];
  };

  const setTextColors = (id, colorVal) => {
    const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

    if (id == 0) {
      setChatterOneColor(colors[colorVal]);
    } else {
      setChatterTwoColor(colors[colorVal]);
    }
  };

  if (entries.length !== 0) {
    getSenders();
  }

  return (
    <div id="App">
      {entries.length !== 0 && (
        <Header
          chatterNames={chatterNames}
          chatterOneColor={chatterOneColor}
          chatterTwoColor={chatterTwoColor}
          setTextColors={setTextColors}
          likedCount={likedCount}
        />
      )}
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog
          entries={entries}
          adjustLikedCount={adjustLikedCount}
          chatterOneColor={chatterOneColor}
          chatterTwoColor={chatterTwoColor}
        />
      </main>
    </div>
  );
};

export default App;
