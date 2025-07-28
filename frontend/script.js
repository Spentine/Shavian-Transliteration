async function shavianToLatinReq(shavian) {
  // change this to spentine.com url when deployed
  // const apiUrl = "https://spentine.com/api/s2l";
  const apiUrl = "http://localhost:8300/api/s2l";
  
  // send shavian text to the API and get latin text back
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: shavian }),
  });
  
  // error handling or whatever
  if (!response.ok) {
    throw new Error("Failed to fetch transliteration");
  }
  
  // parse the response and return the latin text
  const data = await response.json();
  console.log(data);
  
  return data.text;
}

function main() {
  const inputElement = document.getElementById("input");
  const outputElement = document.getElementById("output");
  const convertButton = document.getElementById("convert");

  convertButton.addEventListener("click", async () => {
    const shavianText = inputElement.value;
    outputElement.textContent = "Converting...";
    const latinText = await shavianToLatinReq(shavianText);
    outputElement.textContent = latinText;
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}