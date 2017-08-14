import React, { Component } from "react";
import PropTypes from "prop-types";
import AlphabetPicker from "../AlphabetPicker";
import TextChunks from "../TextChunks";
import greek from "../../data/alphabet/greek.json";

class ChunkAlphabetMapper extends Component {
  state = {
    value: ""
  };
  get chunks() {
    return this.state.value.split(".");
  }

  get alphabet() {
    return (
      this.props.alphabetMap[this.props.alphabet] ||
      this.props.alphabetMap[this.props.defaultAlphabet]
    );
  }

  get renderList() {
    return <TextChunks chunks={this.chunks} alphabet={this.alphabet} />;
  }

  renderInput() {
    return <input placeholder={"text"} onChange={this.handleChange} />;
  }

  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAlphabetChange = this.handleAlphabetChange.bind(this);
  handleAlphabetChange(value) {
    this.props.onAlphabetChange(value);
  }

  renderPicker() {
    return (
      <AlphabetPicker
        value={this.props.alphabet}
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
      this.props.onCustomAlphabetChange(customAlphabet);
    }
  }

  renderCustomAlphabet() {
    return (
      <div>
        <input
          placeholder={"alphabet as json"}
          onChange={this.handleCustomAlphabetChange}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPicker()}
        {this.props.alphabet === "Custom" && this.renderCustomAlphabet()}
        {this.renderInput()}
        {this.renderList}
      </div>
    );
  }
}

ChunkAlphabetMapper.propTypes = {
  alphabet: PropTypes.string,
  // to use in case of broken alphabet
  defaultAlphabet: PropTypes.string,
  onCustomAlphabetChange: PropTypes.func,
  alphabetMap: PropTypes.object
};

ChunkAlphabetMapper.defaultProps = {
  alphabet: "Greek",
  defaultAlphabet: "Greek",
  onCustomAlphabetChange: () => {},
  alphabetMap: {
    Greek: greek,
    Custom: {}
  }
};
export default ChunkAlphabetMapper;
