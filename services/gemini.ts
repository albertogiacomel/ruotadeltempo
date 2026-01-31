
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateFunFact = async (item: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Scrivi una frase molto breve, semplice, divertente e in rima per un bambino di 6 anni sul giorno o mese: "${item}". Massimo 15 parole. In Italiano.`,
    });
    return response.text?.trim() || `Evviva ${item}!`;
  } catch (error) {
    console.error("Gemini Error:", error);
    return `Che bello è ${item}!`;
  }
};
