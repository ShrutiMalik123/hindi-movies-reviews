import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tweet from "./components/tweet/tweet.js";
import tweets from "./tweets";

const linkProps = { target: "_blank" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="tweet-stream" style={{ width: "100%" }}>
          {tweets.map((t, i) => (
            <Tweet autoPlay={true} data={t} key={i} linkProps={linkProps} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
