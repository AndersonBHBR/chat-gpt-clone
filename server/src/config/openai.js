require("dotenv").config(); // ← GARANTE que as variáveis estejam carregadas antes de usar

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = {
  client: openai,

  textCompletion({ prompt }) {
    return {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente útil." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    };
  }
};