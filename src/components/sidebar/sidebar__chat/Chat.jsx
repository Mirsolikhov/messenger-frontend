import './chat.css'
import avatar from './../../../img/ava1.png'

const Chat = () => {
    return ( 
        <div className="sidebar__chat">
            <div className="container">
                <div className="chat__container">
                    <h1>Add new Chat</h1>
                    <div className="chat__box">
                        <div className="chat__logo"><img src={avatar} alt="" /></div>
                        <div className="sidebar_chat__info">
                            <div className="info__name">Name</div>
                            <div className="info__text">Text info</div>
                        </div>
                    </div>
                    <div className="chat__box">
                        <div className="chat__logo"><img src={avatar} alt="" /></div>
                        <div className="sidebar_chat__info">
                            <div className="info__name">Name</div>
                            <div className="info__text">Text info</div>
                        </div>
                    </div>
                    <div className="chat__box">
                        <div className="chat__logo"><img src={avatar} alt="" /></div>
                        <div className="sidebar_chat__info">
                            <div className="info__name">Name</div>
                            <div className="info__text">Text info</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chat;