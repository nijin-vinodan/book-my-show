import mongoose, { Schema, Document } from 'mongoose';

export interface IQueueItem extends Document {
    userId: mongoose.Types.ObjectId;
    token: string;
    joinedAt: Date;
    status: 'WAITING' | 'ACTIVE';
    activeUntil?: Date;
}

export const QueueItemSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true }, // or SessionID
    token: String,
    joinedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['WAITING', 'ACTIVE'], default: 'WAITING' },
    activeUntil: Date
});

export const QueueItem = mongoose.model<IQueueItem>('QueueItem', QueueItemSchema);
