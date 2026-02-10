import "dotenv/config";
import OpenAI from "openai"; 

const apiKey= process.env.OPENAI_API_KEY;

if(!apiKey){
    console.error("Missing OPEN AI KEY");
    process.exit;
}

const client = new OpenAI({apiKey});

const res = await client.responses.create({
    model: "gpt-4o-mini",
    input: "En español: explica qué es un LLM en 2 frases cortas."
})

console.log(`Respuesta: ${res.output_text}`)