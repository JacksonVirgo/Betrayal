import { connectToDatabase } from '@/utils/mongodb';
import mongoose, { Schema, model, Document, mongo } from 'mongoose';

export interface User {
	discordId: string;
}
export interface UserRaw extends User, Document {}
export const UserSchema = new Schema({
	discordId: String,
});

mongoose.deleteModel('discordUser');
export default mongoose.model('discordUser', UserSchema);
