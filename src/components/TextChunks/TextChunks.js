import React, { Component } from "react";
import PropTypes from "prop-types";
import Transliterator from "../Transliterator";
import styles from "./TextChunks.css";

class TextChunks extends Component {
  renderList() {
    let alphabet = [];
    const keys = Object.keys(this.props.alphabet);
    if (this.props.chunks.length !== 0) {
      return Object.keys(
        this.props.alphabet
      ).reduce((newArray, letter, index) => {
        if (
          letter !== this.props.alphabet[letter] &&
          this.props.chunks[index] &&
          this.props.chunks[index].includes(letter)
        ) {
          alphabet.push({ [letter]: this.props.alphabet[letter] });
          let newAlphabet = {};
          alphabet.forEach(value => {
            const key = Object.keys(value)[0];
            newAlphabet = { ...newAlphabet, [key]: value[key] };
          });
          newArray.push(
            <div key={letter}>
              {letter + " = " + this.props.alphabet[letter]}
              <Transliterator
                source={this.props.chunks[index]}
                alphabet={newAlphabet}
              />
            </div>
          );
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
