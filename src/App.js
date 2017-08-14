import React, { Component } from "react";
import ChunkAlphabetMapper from "./components/ChunkAlphabetMapper";
import greek from "./data/alphabet/greek.json";
import "./App.css";

// alphabetmap, alphabet, defaultAlphabet, chunks
class App extends Component {
  state = {
    alphabet: "Greek",
    alphabetMap: {
      Greek: greek,
      Custom: {}
    }
  };

  handleCustomAlphabetChange = this.handleCustomAlphabetChange.bind(this);
  handleCustomAlphabetChange(customAlphabet) {
    this.setState(prevState => {
      return {
        alphabetMap: {
          ...prevState.alphabetMap,
          Custom: customAlphabet
        }
      };
    });
  }

  handleAlphabetChange = this.handleAlphabetChange.bind(this);
  handleAlphabetChange(alphabet) {
    this.setState({ alphabet });
  }

  render() {
    return (
      <ChunkAlphabetMapper
        onCustomAlphabetChange={this.handleCustomAlphabetChange}
        onAlphabetChange={this.handleAlphabetChange}
        alphabet={this.state.alphabet}
        alphabetMap={this.state.alphabetMap}
      />
    );
  }
}

export default App;
