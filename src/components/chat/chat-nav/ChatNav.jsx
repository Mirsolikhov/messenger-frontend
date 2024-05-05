import './chatNav.css'
import search from './../../../img/sidebar-icons/search.svg'
import clip from './../../../img/sidebar-icons/paper-clip.svg'
import menu from './../../../img/sidebar-icons/more.svg'
import ava from './../../../img/ava1.png'


const ChatNav = () => {
    return ( 
        <div className="chat__nav">
            <div className="container">
                <div className="nav__container">
                    <div className="chat__info">
                        <div className="chat__logo"><img src={ava} alt="" /></div>
                        <div className="chat__text">
                            <div className="name">Name</div>
                            <div className="activity">last seen recently</div>
                        </div>
                    </div>
                    <div className="chat__btns">
                        <div className="nav__search"><img src={search} alt="" /></div>
                        <div className="nav__clip"><img src={clip} alt="" /></div>
                        <div className="nav__menu"><img src={menu} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChatNav;