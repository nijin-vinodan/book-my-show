import { Request, Response } from 'express';
import * as UserService from './service';

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    // In real app, hash password here
    const user = await UserService.registerUser(name, email, password);
    res.json({ id: user._id, name: user.name, email: user.email });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await UserService.loginUser(email);

    if (!user || user.passwordHash !== password) {
        return res.status(401).send('Invalid credentials');
    }

    // Return mock token
    res.json({
        token: `mock-token-${user._id}`,
        user: { id: user._id, name: user.name, role: user.role }
    });
};

export const getMe = async (req: Request, res: Response) => {
    res.send('Not implemented (needs token parsing)');
};
