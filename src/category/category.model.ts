import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

export interface Category extends mongoose.Document {
  id: string;
  name: string;
  description: string;
}