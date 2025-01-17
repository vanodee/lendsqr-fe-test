import SearchIcon from "../assets/icons/search.svg?react";


export default function SearchBar() {
    return (
        <div className="search">

            <input 
                type="text" 
                placeholder="Search for anything" 
                className="search-input" 
            />

            <div className="searchbutton">
                <SearchIcon />
            </div>

        </div> 
    )
}
