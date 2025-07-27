// character to ipa mapping
const charToIpa = {
  "𐑐": "p",
  "𐑚": "b",
  "𐑑": "t",
  "𐑛": "d",
  "𐑒": "k",
  "𐑜": "g",
  "𐑓": "f",
  "𐑝": "v",
  "𐑔": "θ",
  "𐑞": "ð",
  "𐑕": "s",
  "𐑟": "z",
  "𐑖": "ʃ",
  "𐑠": "ʒ",
  "𐑗": "ʧ",
  "𐑡": "ʤ",
  "𐑘": "j",
  "𐑢": "w",
  "𐑙": "ŋ",
  "𐑣": "h",
  "𐑤": "l",
  "𐑮": "r",
  "𐑥": "m",
  "𐑯": "n",
  "𐑦": "i",
  "𐑰": "iː",
  "𐑧": "ɛ",
  "𐑱": "eɪ",
  "𐑨": "æ",
  "𐑲": "aɪ",
  "𐑩": "ə",
  "𐑳": "ʌ",
  "𐑪": "ɒ",
  "𐑴": "əʊ",
  "𐑫": "ʊ",
  "𐑵": "uː",
  "𐑶": "ɔɪ",
  "𐑷": "ɔː",
  "𐑸": "ɑːr",
  "𐑹": "ɔːr",
  "𐑺": "ɛər",
  "𐑻": "ɜːr",
  "𐑼": "ər",
  "𐑽": "ɪər",
  "𐑾": "ɪə",
  "𐑿": "juː",
};

// get readlex data
async function getReadlex() {
  const readlex = await Deno.readTextFile(new URL("../readlex.json", import.meta.url));
  return JSON.parse(readlex);
}

// convert raw readlex into usable form
function convertReadlex(readlex) {
  const converted = {};
  
  for (const key in readlex) {
    const entries = readlex[key];
    for (const entry of entries) {
      const latin = entry.Latn;
      const shavian = entry.Shaw;
      
      if (!converted[shavian]) {
        converted[shavian] = [];
      }
      if (!converted[shavian].includes(latin)) {
        converted[shavian].push(latin);
      }
    }
  }
  
  return converted;
}

let readlex;
let readlexData;

// step 1 and 2 of conversion
async function readlexConvert(text) {
  const nonWord = " \n\t-:;/?!.,·⸰«»‹›(){}[]".split("");
  
  // split text into words and non-words
  const textSplit = [];
  let currentPortion = "";
  
  // helper functions to append words and non-words
  function appendWord(word) {
    textSplit.push({
      type: "word",
      text: word,
    });
  }
  
  function appendNonWord(nonWord) {
    textSplit.push({
      type: "nonWord",
      text: nonWord,
    });
  }
  
  // split text
  for (const char of text) {
    if (nonWord.includes(char)) {
      if (currentPortion !== "") {
        appendWord(currentPortion);
        currentPortion = "";
      }
      appendNonWord(char);
    } else {
      currentPortion += char;
    }
  }
  if (currentPortion !== "") {
    appendWord(currentPortion);
  }
  
  // function to convert a word from Shavian
  function convertWord(word) {
    // get word from readlex
    const latinForms = readlexData[word];
    
    if (latinForms) {
      // use readlex
      
      if (latinForms.length === 1) {
        return latinForms[0];
      } else {
        // if there's multiple forms, use this format:
        // [latin1/latin2/...]
        return `[${latinForms.join("/")}]`;
      }
    } else {
      // convert all characters to ipa
      // format is: [shavian, ipa]
      const ipa = Array.from(word).map(char => charToIpa[char] || char).join("");
      
      // if the ipa is empty, return the original word
      if (ipa === "") {
        return word;
      }
      
      // return the ipa in square brackets
      return `[${word}, ${ipa}]`;
    }
  }
  
  // convert all words
  for (const portion of textSplit) {
    if (portion.type === "word") {
      portion.text = convertWord(portion.text);
    }
  }
  
  const str = textSplit.map(p => p.text).join("");
  return str;
}

async function initializeReadlex() {
  readlex = await getReadlex();
  console.log(Object.keys(readlex).length, "readlex entries loaded");
  readlexData = convertReadlex(readlex);
}

initializeReadlex();

export { readlexConvert };