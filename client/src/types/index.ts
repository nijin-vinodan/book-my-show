export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
}

export interface ILocation {
    _id: string;
    name: string;
    city: string;
}

export interface IMovie {
    _id: string;
    title: string;
    description: string;
    genre: string[];
    language: string;
    duration: number; // minutes
    posterUrl: string;
    releaseDate: string;
}

export interface ITheater {
    _id: string;
    name: string;
    locationId: string;
    address: string;
}

export interface IScreen {
    _id: string;
    name: string;
    theaterId: string;
    seatLayout: {
        rowLabel: string;
        seats: {
            number: string;
            type: 'standard' | 'vip' | 'gap';
            priceModifier?: number;
            status?: 'AVAILABLE' | 'LOCKED' | 'BOOKED'; // UI status
        }[];
    }[];
}

export interface IShow {
    _id: string;
    movieId: IMovie; // populated
    theaterId: ITheater; // populated
    screenId: IScreen; // formatted/populated
    startTime: string;
    basePrice: number;
}
