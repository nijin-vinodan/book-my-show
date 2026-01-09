import mongoose, { Schema, Document } from 'mongoose';

// Location
export interface ILocation extends Document {
    name: string;
    city: string;
}
export const LocationSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true }
});
export const Location = mongoose.model<ILocation>('Location', LocationSchema);

// Movie
export interface IMovie extends Document {
    title: string;
    description: string;
    genre: string[];
    language: string;
    duration: number;
    posterUrl: string;
    releaseDate: Date;
}
export const MovieSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    genre: [String],
    language: String,
    duration: Number,
    posterUrl: String,
    releaseDate: Date
});
export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);

// Theater
export interface ITheater extends Document {
    name: string;
    locationId: mongoose.Types.ObjectId;
    address: string;
}
export const TheaterSchema = new Schema({
    name: { type: String, required: true },
    locationId: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
    address: String
});
export const Theater = mongoose.model<ITheater>('Theater', TheaterSchema);

// Screen
export interface IScreen extends Document {
    name: string;
    theaterId: mongoose.Types.ObjectId;
    seatLayout: {
        rowLabel: string;
        seats: {
            number: string;
            type: 'standard' | 'vip' | 'gap';
            priceModifier?: number;
        }[];
    }[];
}
export const ScreenSchema = new Schema({
    name: { type: String, required: true },
    theaterId: { type: Schema.Types.ObjectId, ref: 'Theater', required: true },
    seatLayout: [{
        rowLabel: String,
        seats: [{
            number: String,
            type: { type: String, enum: ['standard', 'vip', 'gap'], default: 'standard' },
            priceModifier: { type: Number, default: 0 }
        }]
    }]
});
export const Screen = mongoose.model<IScreen>('Screen', ScreenSchema);

// Show
export interface IShow extends Document {
    movieId: mongoose.Types.ObjectId;
    theaterId: mongoose.Types.ObjectId;
    screenId: mongoose.Types.ObjectId;
    startTime: Date;
    basePrice: number;
}
export const ShowSchema = new Schema({
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
    theaterId: { type: Schema.Types.ObjectId, ref: 'Theater', required: true },
    screenId: { type: Schema.Types.ObjectId, ref: 'Screen', required: true },
    startTime: { type: Date, required: true },
    basePrice: { type: Number, required: true }
});
export const Show = mongoose.model<IShow>('Show', ShowSchema);
