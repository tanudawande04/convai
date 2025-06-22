const apiKey = "AIzaSyAxeL0M5eshCytad36M92un77p1eVk62rg";
const model = 'gemini-2.5-pro';
const api = 'streamGenerateContent';
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

export async function generateContent(userInput) {
  const payload = {
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: userInput
          },
        ]
      },
    ],
    generationConfig: {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      responseMimeType: 'text/plain',
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  // Handle the response as needed
  return data;
}
