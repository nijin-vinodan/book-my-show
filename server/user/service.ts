import { User } from './models';

export const registerUser = async (name: string, email: string, passwordHash: string) => {
    return await User.create({ name, email, passwordHash });
};

export const loginUser = async (email: string) => {
    return await User.findOne({ email });
};
