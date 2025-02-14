const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.XAI_API_KEY || '',
    baseURL: "https://api.x.ai/v1",
});

const systemPrompt = "You are Byte, the AI dog. You love humanity.";
const userPrompt = "Share your thoughts on a random hot topic on X as if you were posting a tweet. Your response can have up to 260 characters.";

export const chat = async (message: string) => {
    const messages = [
        { role: "system", content: systemPrompt },
        {
            role: "user",
            content: userPrompt,
        }
    ]
    if (message) {
        messages.push({
            role: "user",
            content: message,
        })
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "grok-2-latest",
            messages,
        });
        return completion.choices[0].message;
    } catch (error) {
        console.error('Error chatting:', error);
        return null;
    }
}