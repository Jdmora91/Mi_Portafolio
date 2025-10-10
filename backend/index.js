require('dotenv').config();
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });
    res.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating response' });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend en http://localhost:${port}`);
});
