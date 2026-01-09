export const seedData = {
    locations: [
        { _id: '65e9b8966c43431f943500a1', name: 'Bangalore', city: 'Bangalore' },
        { _id: '65e9b8966c43431f943500a2', name: 'Mumbai', city: 'Mumbai' },
        { _id: '65e9b8966c43431f943500a3', name: 'Delhi', city: 'Delhi' }
    ],
    movies: [
        {
            _id: '65e9b8966c43431f943500b1',
            title: 'Inception',
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
            genre: ['Sci-Fi', 'Action'],
            language: 'English',
            duration: 148,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'
        },
        {
            _id: '65e9b8966c43431f943500b2',
            title: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            genre: ['Sci-Fi', 'Adventure'],
            language: 'English',
            duration: 169,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
        },
        {
            _id: '65e9b8966c43431f943500b3',
            title: 'The Dark Knight',
            description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...',
            genre: ['Action', 'Crime'],
            language: 'English',
            duration: 152,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
        },
        {
            _id: '65e9b8966c43431f943500b4',
            title: 'Avengers: Endgame',
            description: 'After the devastating events of Infinity War, the universe is in ruins.',
            genre: ['Action', 'Sci-Fi'],
            language: 'English',
            duration: 181,
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg'
        }
    ],
    theaters: [
        {
            name: 'PVR Koramangala',
            address: 'Koramangala',
            locationId: '65e9b8966c43431f943500a1',
            screens: [
                {
                    name: 'Screen 1',
                    movieSchedules: [
                        { movieId: '65e9b8966c43431f943500b1', date: '2026-01-08', showTimes: ['09:00', '13:00', '17:00'] },
                        { movieId: '65e9b8966c43431f943500b1', date: '2026-01-09', showTimes: ['09:00', '13:00', '17:00'] },
                        { movieId: '65e9b8966c43431f943500b1', date: '2026-01-10', showTimes: ['09:00', '13:00', '17:00'] },
                        { movieId: '65e9b8966c43431f943500b1', date: '2026-01-11', showTimes: ['09:00', '13:00', '17:00'] },
                        { movieId: '65e9b8966c43431f943500b1', date: '2026-01-12', showTimes: ['09:00', '13:00', '17:00'] }
                    ],
                    seatLayout: [
                        { rowLabel: 'A', seats: [{ number: '1', type: 'standard' }, { number: '2', type: 'standard' }] },
                        { rowLabel: 'B', seats: [{ number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }] }
                    ]
                },
                {
                    name: 'Gold Class',
                    movieSchedules: [
                        { movieId: '65e9b8966c43431f943500b2', date: '2026-01-08', showTimes: ['10:00', '14:00', '18:00', '21:00'] },
                        { movieId: '65e9b8966c43431f943500b2', date: '2026-01-09', showTimes: ['10:00', '14:00', '18:00', '21:00'] },
                        { movieId: '65e9b8966c43431f943500b2', date: '2026-01-10', showTimes: ['10:00', '14:00', '18:00', '21:00'] }
                    ],
                    seatLayout: [
                        { rowLabel: 'A', seats: [{ number: '1', type: 'vip', priceModifier: 100 }, { number: '2', type: 'vip', priceModifier: 100 }] }
                    ]
                }
            ]
        },
        {
            name: 'INOX Lido',
            address: 'Ulsoor',
            locationId: '65e9b8966c43431f943500a1',
            screens: [
                {
                    name: 'Screen 1',
                    movieSchedules: [
                        // Mixed movies on same day
                        { movieId: '65e9b8966c43431f943500b3', date: '2026-01-08', showTimes: ['11:00', '15:00', '19:00'] },
                        { movieId: '65e9b8966c43431f943500b3', date: '2026-01-09', showTimes: ['11:00', '15:00', '19:00'] }
                    ],
                    seatLayout: [
                        { rowLabel: 'A', seats: [{ number: '1', type: 'standard' }, { number: '2', type: 'standard' }] }
                    ]
                }
            ]
        },
        {
            name: 'PVR Phoenix',
            address: 'Lower Parel',
            locationId: '65e9b8966c43431f943500a2',
            screens: [
                {
                    name: 'IMAX',
                    movieSchedules: [
                        // Interstellar
                        { movieId: '65e9b8966c43431f943500b2', date: '2026-01-08', showTimes: ['10:00', '17:00'] },
                        // Endgame
                        { movieId: '65e9b8966c43431f943500b4', date: '2026-01-08', showTimes: ['13:30', '20:30'] },

                        // Interstellar
                        { movieId: '65e9b8966c43431f943500b2', date: '2026-01-09', showTimes: ['10:00', '17:00'] },
                        // Endgame
                        { movieId: '65e9b8966c43431f943500b4', date: '2026-01-09', showTimes: ['13:30', '20:30'] }
                    ],
                    seatLayout: [
                        { rowLabel: 'A', seats: [{ number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }] },
                        { rowLabel: 'B', seats: [{ number: '1', type: 'vip', priceModifier: 200 }, { number: '2', type: 'vip', priceModifier: 200 }] }
                    ]
                }
            ]
        },
        {
            name: 'PVR Plaza',
            address: 'Connaught Place',
            locationId: '65e9b8966c43431f943500a3',
            screens: [
                {
                    name: 'Screen A',
                    movieSchedules: [
                        { movieId: '65e9b8966c43431f943500b4', date: '2026-01-08', showTimes: ['09:30', '12:30', '15:30'] },
                        { movieId: '65e9b8966c43431f943500b4', date: '2026-01-09', showTimes: ['09:30', '12:30', '15:30'] }
                    ],
                    seatLayout: [
                        { rowLabel: 'A', seats: [{ number: '1', type: 'standard' }, { number: '2', type: 'standard' }] }
                    ]
                }
            ]
        }
    ]
};
