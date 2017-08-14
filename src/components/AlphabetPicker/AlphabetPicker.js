import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./AlphabetPicker.css";

class AlphabetPicker extends Component {
  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    const { value } = event.target;
    this.props.onChange(value);
  }

  render() {
    return (
      <div className={styles.root}>
        <select value={this.props.value} onChange={this.handleChange}>
          {this.props.items.map(value => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

AlphabetPicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  items: PropTypes.array
};

AlphabetPicker.defaultProps = {
  onChange: () => {},
  value: "Greek",
  items: ["Greek", "Custom"]
};

export default AlphabetPicker;
