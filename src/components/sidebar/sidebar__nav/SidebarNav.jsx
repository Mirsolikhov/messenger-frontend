import './sidebarNav.css'
import reset from './../../../img/sidebar-icons/reset.svg'
import sms from './../../../img/sidebar-icons/chat-typing-solid.svg'
import menu from './../../../img/sidebar-icons/more.svg'
import avatar from './../../../img/ava1.png'



const SidebarNav = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="messenger__nav">
                    <div className="nav__logo">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="nav__btns">
                        <div className="reset"><img src={reset} alt="reset" /></div>
                        <div className="message"><img src={sms} alt="sms" /></div>
                        <div className="menu"><img src={menu} alt="menu" /></div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default SidebarNav;
