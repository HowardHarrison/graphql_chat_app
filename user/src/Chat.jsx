import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const Chat = () => {
    return (
        <div>It's a chat window</div>
    )
} 

export default () => {
 <ApolloProvider client={client}>
    <Chat />
 </ApolloProvider>
}