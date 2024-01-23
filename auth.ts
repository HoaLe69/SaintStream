import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import facebook from 'next-auth/providers/facebook'

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [GitHub, facebook]
})
