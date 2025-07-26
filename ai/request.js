async function chatCompletions(messages) {
  const apiUrl = "https://ai.hackclub.com/chat/completions";
  
  const body = JSON.stringify({ messages });
  
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  
  if (!response.ok) {
    throw new Error("Failed to fetch chat completions");
  }
  
  const data = await response.json();
  return data.choices[0].message.content;
}

export { chatCompletions };