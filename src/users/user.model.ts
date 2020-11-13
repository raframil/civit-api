import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cpf: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: false },
  isEnabled: { type: Boolean, required: false },
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  role: string;
  isEnabled: boolean;
}