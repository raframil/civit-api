import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: Number, required: true },
  role: { type: String, required: false },
  isEnabled: { type: Boolean, required: false },
});

export interface User extends mongoose.Document {
  id: string;
  email: string;
  password: number;
  role: string;
  isEnabled: boolean;
}