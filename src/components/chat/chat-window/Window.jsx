import './window.css'



const Window = ({messages}) => {
    return ( 
        <div className="chat__window">
            <div className="container">
                {messages.map( (message) => (
                    <div className={`chat__message ${message.received && "reply__message"}`}>
                        <h5>{message.name}</h5>
                        <span className="message">{message.message}</span>
                        <span className="time">
                            { message.time}
                              
                        </span>
                    </div>
                ) )}
                
                <div className="chat__message reply__message">
                    <h5>Name</h5>
                    <span className="message">Message</span>
                    <span className="time">
                        { new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    </span>
                </div>
                <div className="chat__message">
                    <h5>Name</h5>
                    <span className="message">Message</span>
                    <span className="time">
                        { new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    </span>
                </div>
                <div className="chat__message">
                    <h5>Name</h5>
                    <span className="message">Message</span>
                    <span className="time">
                        { new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Window;