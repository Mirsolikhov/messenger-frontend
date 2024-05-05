import './search.css'
import search from './../../../img/sidebar-icons/search.svg'

const Search = () => {
    return ( 
        <div className="search">
            <div className="container">
                <div className="search__container">
                    <div className="search__icon"><img src={search} alt="search" /></div>
                    <div className="seatch__input">
                        <input type="text" placeholder="Search or start new chat " />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;
