import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const SYMBOLS = [
  "👹",
  "💩",
  "🤖",
  "🎩",
  "🍑",
  "🍍",
  "👾",
  "🎼",
  "🏹",
  "🎣",
  "⛵",
  "⌚",
  "📱",
  "🔫",
  "💣",
  "🎉",
  "🎎",
  "🃏",
  "🀄",
  "🎴",
  "👁",
  "☠",
  "⌛",
  "🍬",
  "🍭",
  "🍫",
  "🍿",
  "🍩",
  "🍪",
  "🍓",
  "🍈",
  "🍒",
  "🌹",
  "🌷",
  "🌼",
  "🌸",
  "💐",
  "🍄",
  "🌰",
  "🎃",
  "🐚",
  "🐾",
  "🐉",
  "🐲",
  "🌵",
  "🎄",
  "🌲",
  "🌳",
  "🌴",
  "🌱",
  "🌿",
  "☘",
  "🍀",
  "🎍",
  "🎋",
  "🍃",
  "🍂",
  "🍁",
  "🌾",
  "🚣",
  "🛀",
  "🏄",
  "🏇",
  "🏊",
  "⛹",
  "🏋",
  "🚴",
  "🚵"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: ["🍿", "🍩", "🛀"]
    };
  }

  render() {
    return (
      <div className="App">
        <h1>MEMORY</h1>
        <ul className="board">
          <li class="card unsolved">
            <div class="content">
              <div class="front">{this.state.cards[0]}</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">{this.state.cards[1]}</div>
              <div class="back" />
            </div>
          </li>
          <li class="card  unsolved">
            <div class="content">
              <div class="front">{this.state.cards[2]}</div>
              <div class="back" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
