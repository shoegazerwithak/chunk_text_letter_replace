import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "../../utils";
import styles from "./Transliterator.css";

"".replace(1, 2);
class Transliterator extends Component {
  state = {
    value: ""
  };

  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  get result() {
    return translate(this.state.value, Object.keys(this.props.alphabet), this.props.alphabet);
  }

  render() {
    return (
      <div className={styles.root}>
        <textarea value={this.state.value} onChange={this.handleChange} />
        <div>
          {this.result}
        </div>
      </div>
    );
  }
}

Transliterator.propTypes = {
  alphabet: PropTypes.object,
  targetLetter: PropTypes.oneOf([ PropTypes.object, PropTypes.string ])
};

Transliterator.defaultProps = {
  alphabet: {}
};

export default Transliterator;
