import { readlexConvert } from "./wordConvert.js";
import { chatCompletions } from "../ai/request.js";

const sysPrompt = `The text provided by the user was originally in the Shavian alphabet. Please properly transliterate it to the Latin alphabet.

Use your judgement to decide whether to transcribe it casually or formally, based on the content of the text. If there is proper punctuation, use formal transcription.

In Shavian, "·" denotes a namer dot, which is equivalent to capitalizing the first letter of a word in Latin for important nouns. If a word has a namer dot preceeding it, capitalize the first letter of the word in Latin.

A lot of the text has already been transliterated into Latin, but there is still some ambiguity in some areas. If a word has multiple possible Latin transliterations, it will appear as a list in the format: [word1/word2/...]. Choose the best option based on the context of the text.

If a word in Shavian doesn't appear in the master dictionary used to transliterate the text into latin, it wlil appear in the format: [shavian, ipa]. The IPA is an approximate phonetic transcription of the word. If it is similar to an already-existing word and matches up well, then transcribe it as that word.

Do not add any additional text or explanations, just return the transliterated text.`;

// step 3 of conversion
async function aiConvert(text) {
  const response = await chatCompletions([
    { role: "system", content: sysPrompt },
    { role: "user", content: text },
  ]);
  return response;
}

function cleanResponse(text) {
  // check if text contains "</think>\n\n"
  if (text.includes("</think>\n\n")) {
    // only take the part after "</think>\n\n"
    const parts = text.split("</think>\n\n");
    return parts[1].trim();
  }
  return text.trim();
}

async function shavianToLatin(shavian) {
  console.log(`Converting Shavian text: ${shavian}`);
  
  // step 1 and 2 of conversion
  const str = await readlexConvert(shavian);
  console.log(`Converted to readlex format: ${str}`);
  
  const response = await aiConvert(str);
  console.log(`Response from AI: ${response}`);
  
  const clean = cleanResponse(response);
  
  return clean;
}

export { shavianToLatin };