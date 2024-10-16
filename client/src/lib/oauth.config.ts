import { CredentialsSignin, NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { encrypt, getSession, login, updateAccessToken } from './auth';

class CustomError extends CredentialsSignin {
  code = "custom_error"
}

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'John',
          email: credentials?.email as string,
          passwrod: credentials?.password as string
        };
        const ok = await login(user.email, user.passwrod);
        if (!ok) throw new CustomError();
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log('User', user);
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  pages: {
    signIn: '/auth' //sigin page
  },
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // Nếu có account (khi đăng nhập lần đầu)
      if (account) {
        // Lưu dữ liệu người dùng vào cơ sở dữ liệu
        console.log('Account', account);
        // if (account != null && user.email && account.access_token !== undefined) {
        //   await updateAccessToken(account.access_token);
        // }
        // Thêm access token vào JWT
        console.log('Token', token);
      }

      // Trả về token tùy chỉnh
      return token;
    },
    async session({ session, token }) {
      // Thêm accessToken vào session trả về cho client
      // console.log('Token', token);
      // session.accessToken = token.accessToken;
      const sess = await getSession();
      console.log(sess)
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60 // 1 hours
  },
} satisfies NextAuthConfig;

export default authConfig;