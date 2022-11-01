import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"



export default NextAuth({
  providers: [
    SpotifyProvider({
      authorization:'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-top-read,user-read-playback-state',
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    }),
        // ...add more providers here

  ],
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token.accessToken = account.refresh_token;
      }
      return token;
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
    //signOut: '/auth/signout',
    //error: '/auth/error', // Error code passed in query string as ?error=
    //verifyRequest: '/auth/verify-request', // (used for check email message)
    //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});



