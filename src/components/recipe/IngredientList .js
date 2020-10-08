import React from "react";
import PropTypes from "prop-types";
import ListGroup from 'react-bootstrap/ListGroup'

function IngredientList({ ingredients }) {


    const ingredientsArray = ingredients.split(',');
    const ingredientList = ingredientsArray.map((ingredients, index) => {
        return <ListGroup horizontal><ListGroup.Item key={index}>{ingredients}</ListGroup.Item></ListGroup>
    })

    return (
        <>{ingredientList}</>
    );
}

IngredientList.propTypes = {
    ingredients: PropTypes.string.isRequired,
};

export default IngredientList;