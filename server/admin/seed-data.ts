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
                        {
                            rowLabel: 'A', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'B', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'C', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        // Standard rows
                        {
                            rowLabel: 'D', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'E', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'F', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'G', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'H', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'I', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'J', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'K', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        }
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
                        {
                            rowLabel: 'A', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'B', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'C', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        // Standard rows
                        {
                            rowLabel: 'D', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'E', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'F', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'G', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'H', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'I', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        }
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
                        {
                            rowLabel: 'A', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'B', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'C', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        // Standard rows
                        {
                            rowLabel: 'D', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'E', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'F', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'G', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'H', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'I', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'J', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        }
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
                        {
                            rowLabel: 'A', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'B', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'C', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        // Standard rows
                        {
                            rowLabel: 'D', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'E', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'F', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        }
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
                        {
                            rowLabel: 'A', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'B', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        {
                            rowLabel: 'C', seats: [
                                { number: '1', type: 'vip', priceModifier: 50 }, { number: '2', type: 'vip', priceModifier: 50 }, { number: '3', type: 'vip', priceModifier: 50 }, { number: '4', type: 'vip', priceModifier: 50 },
                                { number: '5', type: 'vip', priceModifier: 50 }, { number: '6', type: 'vip', priceModifier: 50 }, { number: '7', type: 'vip', priceModifier: 50 }, { number: '8', type: 'vip', priceModifier: 50 },
                                { number: '9', type: 'vip', priceModifier: 50 }, { number: '10', type: 'vip', priceModifier: 50 }, { number: '11', type: 'vip', priceModifier: 50 }, { number: '12', type: 'vip', priceModifier: 50 },
                                { number: '13', type: 'vip', priceModifier: 50 }, { number: '14', type: 'vip', priceModifier: 50 }, { number: '15', type: 'vip', priceModifier: 50 }, { number: '16', type: 'vip', priceModifier: 50 },
                                { number: '17', type: 'vip', priceModifier: 50 }, { number: '18', type: 'vip', priceModifier: 50 }, { number: '19', type: 'vip', priceModifier: 50 }, { number: '20', type: 'vip', priceModifier: 50 },
                                { number: '21', type: 'vip', priceModifier: 50 }, { number: '22', type: 'vip', priceModifier: 50 }, { number: '23', type: 'vip', priceModifier: 50 }, { number: '24', type: 'vip', priceModifier: 50 },
                                { number: '25', type: 'vip', priceModifier: 50 }, { number: '26', type: 'vip', priceModifier: 50 }, { number: '27', type: 'vip', priceModifier: 50 }, { number: '28', type: 'vip', priceModifier: 50 },
                                { number: '29', type: 'vip', priceModifier: 50 }, { number: '30', type: 'vip', priceModifier: 50 }, { number: '31', type: 'vip', priceModifier: 50 }, { number: '32', type: 'vip', priceModifier: 50 },
                                { number: '33', type: 'vip', priceModifier: 50 }, { number: '34', type: 'vip', priceModifier: 50 }, { number: '35', type: 'vip', priceModifier: 50 }, { number: '36', type: 'vip', priceModifier: 50 },
                                { number: '37', type: 'vip', priceModifier: 50 }, { number: '38', type: 'vip', priceModifier: 50 }, { number: '39', type: 'vip', priceModifier: 50 }, { number: '40', type: 'vip', priceModifier: 50 }
                            ]
                        },

                        // Standard rows
                        {
                            rowLabel: 'D', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'E', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'F', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'G', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'H', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        },

                        {
                            rowLabel: 'I', seats: [
                                { number: '1', type: 'standard' }, { number: '2', type: 'standard' }, { number: '3', type: 'standard' }, { number: '4', type: 'standard' },
                                { number: '5', type: 'standard' }, { number: '6', type: 'standard' }, { number: '7', type: 'standard' }, { number: '8', type: 'standard' },
                                { number: '9', type: 'standard' }, { number: '10', type: 'standard' }, { number: '11', type: 'standard' }, { number: '12', type: 'standard' },
                                { number: '13', type: 'standard' }, { number: '14', type: 'standard' }, { number: '15', type: 'standard' }, { number: '16', type: 'standard' },
                                { number: '17', type: 'standard' }, { number: '18', type: 'standard' }, { number: '19', type: 'standard' }, { number: '20', type: 'standard' },
                                { number: '21', type: 'standard' }, { number: '22', type: 'standard' }, { number: '23', type: 'standard' }, { number: '24', type: 'standard' },
                                { number: '25', type: 'standard' }, { number: '26', type: 'standard' }, { number: '27', type: 'standard' }, { number: '28', type: 'standard' },
                                { number: '29', type: 'standard' }, { number: '30', type: 'standard' }, { number: '31', type: 'standard' }, { number: '32', type: 'standard' },
                                { number: '33', type: 'standard' }, { number: '34', type: 'standard' }, { number: '35', type: 'standard' }, { number: '36', type: 'standard' },
                                { number: '37', type: 'standard' }, { number: '38', type: 'standard' }, { number: '39', type: 'standard' }, { number: '40', type: 'standard' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
