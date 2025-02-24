// const { GraphQLServer } = require('graphql-yoga');
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const messages = [];
//types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        messages: () => messages,
    },
    Mutation: {
        postMessage: (parent, {user, content}) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            return id;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

 const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(`Server ready at port`, { url })

// server.start((port) => {
//     console.log('Server on http://localhost:{$port}/',port);
// })