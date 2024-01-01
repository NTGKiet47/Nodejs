import db from '../models/index';
export const register = () => new Promise((resolve, reject) => {
    try {
        resolve('Register service');
        console.log('after resolve');
    } catch (error) {
        reject(error);
    }
})