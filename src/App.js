import { useEffect, useState } from 'react';
import './App.css'
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setData] = useState([]);
  useEffect(()  =>  {
    axios.get('/messages/sync')
      .then(response => {
        setData(response.data);
      })
  },[])

  useEffect(() => {
    const pusher = new Pusher('5b59b479cbbe75e50159', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messenger-app');
    channel.bind('inserted', (data)=> {
      alert(JSON.stringify(data));
    });
  }, [])

  console.log(messages)
  return (
    <div className="App">
      <div className="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
