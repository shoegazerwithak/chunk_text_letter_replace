import React, { Component } from "react";
import Transliterator from "./components/Transliterator";
import AlphabetPicker from "./components/AlphabetPicker";
import greek from "./data/alphabet/greek.json";
import "./App.css";

// const text =
//   "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops";
// const text =
// "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.\n\n\"What's happened to me? \" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.\n\nIt showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.\n\n\"How about if I sleep a little bit longer and forget all this nonsense\", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn't get into that position. However hard he threw himself onto his right, he always rolled back to where he was. He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.\n\n\"Oh, God\", he thought, \"what a strenuous career it is that I've chosen! Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them. It can all go to Hell!\n\n\" He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn't know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position. \"Getting up early all the time\", he thought, \"it makes you stupid. You've got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I'd get kicked out on the spot. But who knows, maybe that would be the best thing for me. If I didn't have my parents to think about I'd have given in my notice a long time ago, I'd have gone up to the boss and told him just what I";
// const chunks = text.split(".");
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
    let alphabet = [];
    return Object.keys(this.alphabet).reduce((newArray, letter, index) => {
      if (
        letter !== this.alphabet[letter] &&
        this.chunks[index] &&
        this.chunks[index].includes(letter)
      ) {
        alphabet.push({ [letter]: this.alphabet[letter] });
        let newAlphabet = {};
        alphabet.forEach(value => {
          const key = Object.keys(value)[0];
          newAlphabet = { ...newAlphabet, [key]: value[key] };
        });
        newArray.push(
          <div key={letter}>
            {letter + " = " + this.alphabet[letter]}
            <Transliterator
              source={this.chunks[index]}
              alphabet={newAlphabet}
            />
          </div>
        );
      }
      return newArray;
    }, []);
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
