import { QueueItem } from './models';

export const getStatus = async (userId: string) => {
    const item = await QueueItem.findOne({ userId });
    // Mock FIFO
    const position = 0;

    if (item && item.status === 'ACTIVE') {
        return { status: 'ACTIVE', token: item.token };
    }
    return { status: 'WAITING', position };
};

export const joinQueue = async (userId: string) => {
    const existing = await QueueItem.findOne({ userId });
    if (existing) return existing;

    const item = await QueueItem.create({ userId });
    item.status = 'ACTIVE';
    item.token = `qt-${userId}-${Date.now()}`;
    await item.save();
    return item;
};

export const validateToken = async (token: string) => {
    const item = await QueueItem.findOne({ token, status: 'ACTIVE' });
    return !!item;
};
