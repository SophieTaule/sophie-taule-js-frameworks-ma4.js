import React from 'react';
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchRecipe({ filterSearch }) {
    return (
        <InputGroup className="SearchRecipe">
            <FormControl placeholder="Search by recipe..." onChange={event => filterSearch(event)} />
        </InputGroup>
    );
}

SearchRecipe.propTypes = {
    filterSearch: PropTypes.func.isRequired
};

export default SearchRecipe;