import NextAuth from 'next-auth';
import authConfig from './oauth.config';

export const { auth, handlers, signOut, signIn } = NextAuth(authConfig);