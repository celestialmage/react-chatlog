import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import ColorPicker from './components/ColorPicker';
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

  const setTextColors = async (id, colorVal) => {
    const colors = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black'];

    if (id == 0) {
      setChatterOneColor(colors[colorVal]);
    } else {
      setChatterTwoColor(colors[colorVal]);
    }
  };

  getSenders();

  console.log(chatterNames);
  console.log(chatterOneColor, chatterTwoColor);

  return (
    <div id="App">
      <header>
        <h1>Chat between {chatterNames[0]} and {chatterNames[1]}</h1>
        <div className="container">
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
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry sender={entries[0].sender} body={entries[0].body} timeStamp={entries[0].timeStamp} /> */}
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
