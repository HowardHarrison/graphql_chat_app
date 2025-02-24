import './App.css'
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query {
    messages {
      id,
      user,
      content
    }
  }
`;

const Messages = ( id, user, content ) => {
  // const { data, loading, error } = useQuery(GET_MESSAGES);
  // console.log(data);
  // // Handle loading state
  // if (loading) return <p>Loading...</p>;

  // // Handle error state
  // if (error) return <p>Error: {error.message}</p>;

  // // Handle case where data is not available
  // if (!data || !data.messages || data.messages.length === 0) {
  //   return <p>No messages available.</p>;
  // }

  return (
    <div>
      <ul>
        {/* {data.messages.map((message) => (
          <li key={message.id}>
            <strong>{message.user}:</strong> 
            {message.content}
          </li>
        ))} */}
        {id}/{user}/{content}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <div className='text-4xl text-slate-500'>apollo testing</div>
      hello
      <Messages id="1" user="Jack" content="Hello"/>
      <Messages id="2" user="John" content="Hi"/>
    </div>

  )
}

export default App
