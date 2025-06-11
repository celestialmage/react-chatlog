import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import entries from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry sender={entries[0].sender} body={entries[0].body} timeStamp={entries[0].timeStamp} /> */}
        <ChatLog entries={entries}/>
      </main>
    </div>
  );
};

export default App;
