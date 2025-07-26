import { chatCompletions } from "../ai/request.js";

const sysPrompt = "";

// step 1 of conversion
async function readlexConvert(text) {
  
}

// step 3 of conversion
async function aiConvert(text) {
  const response = await chatCompletions([
    { role: "system", content: sysPrompt },
    { role: "user", content: text },
  ]);
  return response;
}

async function shavianToLatin(shavian) {
  const response = await chatCompletions([{ role: "user", content: shavian }]);
  return response;
}

export { shavianToLatin };