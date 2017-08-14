import React, { Component } from "react";
import Transliterator from "./components/Transliterator";
import AlphabetPicker from "./components/AlphabetPicker";
import TextChunks from "./components/TextChunks";
import greek from "./data/alphabet/greek.json";
import "./App.css";

class App extends Component {
  state = {
    alphabet: "Greek",
    defaultAlphabet: "Greek",
    value: "",
    alphabetMap: {
      Greek: greek,
      Custom: {}
    }
  };
  get chunks() {
    return this.state.value.split(".");
  }

  get alphabet() {
    return (
      this.state.alphabetMap[this.state.alphabet] ||
      this.state.alphabetMap[this.state.defaultAlphabet]
    );
  }

  get renderList() {
    return <TextChunks chunks={this.chunks} alphabet={this.alphabet} />;
  }

  renderInput() {
    return <input onChange={this.handleChange} />;
  }

  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAlphabetChange = this.handleAlphabetChange.bind(this);
  handleAlphabetChange(value) {
    this.setState({ alphabet: value });
  }

  renderPicker() {
    return (
      <AlphabetPicker
        value={this.state.alphabet}
        onChange={this.handleAlphabetChange}
      />
    );
  }

  handleCustomAlphabetChange = this.handleCustomAlphabetChange.bind(this);
  handleCustomAlphabetChange(event) {
    const { value } = event.target;
    let customAlphabet;
    try {
      customAlphabet = JSON.parse(value);
    } catch (e) {
      console.log(e);
    }
    if (customAlphabet) {
      this.setState(prevState => {
        return {
          alphabetMap: {
            ...prevState.alphabetMap,
            Custom: customAlphabet
          }
        };
      });
    }
  }

  renderCustomAlphabet() {
    return <input onChange={this.handleCustomAlphabetChange} />;
  }

  render() {
    return (
      <div className="App">
        {this.renderPicker()}
        {this.state.alphabet === "Custom" && this.renderCustomAlphabet()}
        {this.renderInput()}
        {this.renderList}
      </div>
    );
  }
}

export default App;
