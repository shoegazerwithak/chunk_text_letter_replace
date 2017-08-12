import React, { Component } from "react";
import Transliterator from "./components/Transliterator";
import logo from "./logo.svg";
import "./App.css";

const x = {
  // A: "Α",
  a: "α",
  // B: "Β",
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
const text =
  "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops";
const chunks = text.split(".");
class App extends Component {
  get renderList() {
    let alphabet = [];
    return Object.keys(x).reduce((newArray, letter, index) => {
      if (letter !== x[letter]) {
        alphabet.push({ [letter]: x[letter] });
        let newAlphabet = {};
        alphabet.forEach(value => {
          const key = Object.keys(value)[0];
          newAlphabet = { ...newAlphabet, [key]: value[key] };
          console.log(newAlphabet);
          
        })
        console.log(alphabet, newAlphabet);

        newArray.push(
          <div key={letter}>
            {letter + " = " + x[letter]}
            <Transliterator source={chunks[index]} alphabet={newAlphabet} />
          </div>
        );
      }
      return newArray;
    }, []);
  }
  render() {
    return (
      <div className="App">
        {this.renderList}
      </div>
    );
  }
}

export default App;
