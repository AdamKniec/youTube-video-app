
import React from 'react';

const SearchBar  = (props) => {

    let executeFormSubmission = (e) => {
        e.preventDefault();
        props.handleFormSubmit(props.term);

    }

    return(
        <form className="ui form" onSubmit={executeFormSubmission.bind(this)}>
            <label htmlFor="searchTerm" className="ui fluid icon input">
                <input type="text" placeholder="Search Term" onChange={props.handleUserInput}/>
                <i className="search icon"></i>
            </label>
        </form>
    )
}

export default SearchBar;