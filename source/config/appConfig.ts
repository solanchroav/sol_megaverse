import dotenv from 'dotenv';
dotenv.config();

export const MEGAVERSE_API_URL = process.env.MEGAVERSE_API_URL || 'https://challenge.crossmint.io';
export const PORT = parseInt(process.env.PORT || '3008', 10);