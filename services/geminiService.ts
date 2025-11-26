import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the client safely
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "ขออภัย ระบบ AI ยังไม่พร้อมใช้งานในขณะนี้ (Missing API Key).";

  try {
    const formattedHistory = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }],
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: formattedHistory,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "ขออภัย ไม่สามารถประมวลผลคำตอบได้";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "เกิดข้อผิดพลาดในการเชื่อมต่อกับระบบ AI";
  }
};
