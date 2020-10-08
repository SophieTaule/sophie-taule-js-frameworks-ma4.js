import React from 'react';
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import IngredientList from "./IngredientList ";

function RecipeItem({ title, image, ingredients, link }) {

    return (
        <Card>
            <Card.Img className="CardItem" variant="top" src={image} />
            <Card.Body className="RecipeItem">
                <Card.Title className="RecipeTitle">{title}</Card.Title>
                <IngredientList ingredients={ingredients} />
                <Button href={link} variant="outline-info" block>View Recipe</Button>
            </Card.Body>
        </Card>
    )
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default RecipeItem;