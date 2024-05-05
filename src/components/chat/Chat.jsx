import Input from './chat-input/Input';
import ChatNav from './chat-nav/ChatNav';
import Window from './chat-window/Window';
import './chat.css'


const Chat = ({messages}) => {
    return ( 
        <div className="chat">
            <ChatNav/>
            <Window messages={messages}/>
            <Input/>
        </div>
     );
}
 
export default Chat;