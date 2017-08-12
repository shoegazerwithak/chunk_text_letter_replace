import React, { Component } from "react";
import Transliterator from "./components/Transliterator";
import logo from "./logo.svg";
import "./App.css";

const x = {
  A: "Α",
  a: "α",
  B: "Β",
  b: "β",
  G: "Γ",
  g: "γ",
  D: "Δ",
  d: "δ",
  E: "Ε",
  e: "ε",
  Z: "Ζ",
  z: "ζ",
  H: "Η",
  h: "η",
  TH: "Θ",
  Th: "Θ",
  th: "θ",
  U: "Θ",
  u: "θ",
  I: "Ι",
  i: "ι",
  K: "Κ",
  k: "κ",
  L: "Λ",
  l: "λ",
  M: "Μ",
  m: "μ",
  N: "Ν",
  n: "ν",
  X: "Ξ",
  x: "ξ",
  O: "Ο",
  o: "ο",
  P: "Π",
  p: "π",
  R: "Ρ",
  r: "ρ",
  S: "Σ",
  s: "σ",
  T: "Τ",
  t: "τ",
  Y: "Υ",
  y: "υ",
  F: "Φ",
  f: "φ",
  CH: "Χ",
  Ch: "Χ",
  ch: "χ",
  PS: "Ψ",
  Ps: "Ψ",
  ps: "ψ",
  W: "Ω",
  w: "ω"
};

class App extends Component {
  renderList() {
    // return Object.keys(x).map(letter =>
    //   <div key={letter}>
    //     {letter + " = " + x[letter]}
    //     <Transliterator alphabet={{ [letter]: x[letter] }} />
    //   </div>
    // );
    // items={this.props.items.reduce((newArray, artist) => {
    //               if (!this.props.artists[artist.name] && newArray.length < 3) {
    //                   newArray.push({image: artist.image[2]["#text"], ...artist});
    //               }
    //               return newArray;
    //           }, [])}
    return Object.keys(x).reduce((newArray, letter) => {
      if (letter !== x[letter]) {
        newArray.push(
          <div key={letter}>
            {letter + " = " + x[letter]}
            <Transliterator alphabet={{ [letter]: x[letter] }} />
          </div>
        );
      }
      return newArray;
    }, []);
  }
  render() {
    return (
      <div className="App">
        {this.renderList()}
      </div>
    );
  }
}

export default App;
