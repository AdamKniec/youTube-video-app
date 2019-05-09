import React from 'react';

const SearchBar = () => {
    return(
        <div className="ui segment">
            <form className="ui form">
                <label htmlFor="searchTerm" className="ui fluid icon input">
                    <input type="text" placeholder="Search Term" />
                    <i className="search icon"></i>
                </label>
            </form>
        </div>
    )
}

export default SearchBar;