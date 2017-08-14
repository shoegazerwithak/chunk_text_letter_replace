import React, { Component } from "react";
import PropTypes from "prop-types";
import Transliterator from "../Transliterator";
// import styles from "./TextChunks.css";

class TextChunks extends Component {
  renderLetter(letter) {
    return (
      <div>
        {letter + " = " + this.props.alphabet[letter]}
      </div>
    );
  }

  lettersAreDifferent(letter) {
    return letter !== this.props.alphabet[letter];
  }

  chunkIncludesLetter(index, letter) {
    return (
      this.props.chunks[index] && this.props.chunks[index].includes(letter)
    );
  }

  renderChunk(letter, index, alphabet) {
    return (
      <div key={letter}>
        {this.renderLetter(letter)}
        <Transliterator source={this.props.chunks[index]} alphabet={alphabet} />
      </div>
    );
  }

  renderList() {
    let alphabet = [];
    const keys = Object.keys(this.props.alphabet);
    const notEmpty = this.props.chunks.length !== 0 && keys.length !== 0;
    if (notEmpty) {
      return Object.keys(
        this.props.alphabet
      ).reduce((newArray, letter, index) => {
        if (
          this.lettersAreDifferent(letter) &&
          this.chunkIncludesLetter(index, letter)
        ) {
          alphabet.push({ [letter]: this.props.alphabet[letter] });
          let newAlphabet = {};
          alphabet.forEach(value => {
            const key = Object.keys(value)[0];
            newAlphabet = { ...newAlphabet, [key]: value[key] };
          });
          newArray.push(this.renderChunk(letter, index, newAlphabet));
        }
        return newArray;
      }, []);
    }
    return [];
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

TextChunks.propTypes = {
  alphabet: PropTypes.object,
  chunks: PropTypes.arrayOf(PropTypes.string)
};

TextChunks.defaultProps = {
  alphabet: {},
  chunks: []
};

export default TextChunks;
