import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import entries from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [likedCount, setLikedCount] = useState(0);

  const adjustLikedCount = liked => {
    setLikedCount(count => count = (liked ? count - 1 : count + 1));
  };

  return (
    <div id="App">
      <header>
        <h1>{likedCount} ❤️s</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry sender={entries[0].sender} body={entries[0].body} timeStamp={entries[0].timeStamp} /> */}
        <ChatLog entries={entries} adjustLikedCount={adjustLikedCount} setLikedCount={setLikedCount}/>
      </main>
    </div>
  );
};

export default App;
