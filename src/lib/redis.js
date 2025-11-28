// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function getData() {
    const data = await redis.get('workData');
    return data ? JSON.parse(data) : { works: [] };
}

export async function setData(data) {
    await redis.set('workData', JSON.stringify(data));
    return data;
}


export async function getUsers() {
    const data = await redis.get('authData');
    return data ? JSON.parse(data) : { user: [] };
}

export async function setUsers(data) {
    await redis.set('authData', JSON.stringify(data));
    return data;
}

export default redis;