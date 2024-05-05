import './sidebar.css'
import Chat from './sidebar__chat/Chat';
import SidebarNav from './sidebar__nav/SidebarNav';
import Search from './sidebar__search/Search';

const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <SidebarNav/>
            <Search/>
            <Chat/>
        </div>
     );
}
 
export default Sidebar;