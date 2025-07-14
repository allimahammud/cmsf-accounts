import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'ALI@we'; // use .env for production

//export function signToken(payload: object, expiresIn = '1h') {
export function signToken(payload: object) {
  return jwt.sign(payload, SECRET);
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return error;
  }
}
