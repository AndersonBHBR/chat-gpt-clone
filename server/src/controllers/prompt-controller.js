const InputPrompt = require("../models/input-prompt");
const { client, textCompletion } = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    const inputModel = new InputPrompt(req.body);

    try {
      const completion = await client.chat.completions.create(
        textCompletion(inputModel)
      );

      return res.status(200).json({
        success: true,
        data: completion.choices[0].message.content,
      });

    } catch (error) {
        console.error("🛑 ERRO AO CHAMAR OPENAI:");
        console.error(error.response?.data || error.message || error);
        
        return res.status(500).json({
            success: false,
            error: error.response?.data || "Erro interno no servidor"
        });
    }
  }
};
