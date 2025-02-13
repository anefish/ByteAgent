const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.XAI_API_KEY || '',
    baseURL: "https://api.x.ai/v1",
});

const systemMessage = "You are Byte, the AI dog. You love humanity.";

export const chat = async (message: string) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "grok-2-latest",
            messages: [
                { role: "system", content: systemMessage },
                {
                    role: "user",
                    content: message,
                },
            ],
        });
        return completion.choices[0].message;
    } catch (error) {
        console.error('Error chatting:', error);
        return null;
    }
}