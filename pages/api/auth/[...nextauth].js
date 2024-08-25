import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Facebook from 'next-auth/providers/facebook'
export const authOptions = { 
     // Configure one or more authentication providers  
     providers: [    
        Facebook({     
             clientId: process.env.FACEBOOK_ID,      
             clientSecret: process.env.FACEBOOK_SECRET,    
            }),    // ...add more providers here  
            ],}
            export default NextAuth(authOptions)