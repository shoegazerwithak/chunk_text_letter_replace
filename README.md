This project is intended to use as a helper to learn new alphabet.
It splits the text in chunks and replaces by 1 letter each paragraph.

## How to use

Transliterator
is the most basic component, it just replaces the letters in a given string by a provided alphabet mapping
```js
// an alphabet is an object, containing letter mappings 
const alphabet = { a: "α",  b: "β", G: "Γ", g: "γ", ... }
<Transliterator source={"One morning, when Gregor Samsa woke from troubled dreams"} alphabet={alphabet} />
```

```
One morning, when Gregor Sαmsα woke from troubled dreαms
```

TextChunks

```js
// where chunks is an array of strings (as if text was splitted by dots)
const chunks = [...]
const alphabet = { a: "α",  b: "β", G: "Γ", g: "γ", ... }
<TextChunks chunks={chunks} alphabet={alphabet} />;
```

will render

```
a = α
One morning, when Gregor Sαmsα woke from troubled dreαms, he found himself trαnsformed in his bed into α horrible vermin
b = β
He lαy on his αrmour-like βαck, αnd if he lifted his heαd α little he could see his βrown βelly, slightly domed αnd divided βy αrches into stiff sections
g = γ
His mαny leγs, pitifully thin compαred with the size of the rest of him, wαved αβout helplessly αs he looked
...
```

ChunkAlphabetMapper
has form for text input and alphabet picker. One can enter custom alphabet mapping object (alphabetMap)
alphabet is name of currently used alphabet mapping

```js
  import greek from "../greek.json";

  const alphabet: "Greek",
  const alphabetMap = {
      Greek: greek,
      Custom: { ... }
    };

<ChunkAlphabetMapper
  onCustomAlphabetChange={this.handleCustomAlphabetChange}
  onAlphabetChange={this.handleAlphabetChange}
  alphabet={alphabet}
  alphabetMap={alphabetMap}
/>
```