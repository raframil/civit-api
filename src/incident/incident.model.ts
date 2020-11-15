import * as mongoose from 'mongoose';

export const IncidentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude:  { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    protocol: { type: String, required: true },
    image: { type: String, required: false }
});

export interface Incident extends mongoose.Document {
    id: string;
    title: string;
    date: string;
    latitude: string;
    longitude: string;
    category: string;
    description: string;
    protocol: string;
    image: string;
}