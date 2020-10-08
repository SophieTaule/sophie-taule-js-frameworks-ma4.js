import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import SearchRecipe from "./SearchRecipe";

function RecipeList() {

    const [recipe, setRecipe] = useState(null);
    const [filterRecipe, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(json => {
                setRecipe(json.results);
                setFilter(json.results);
            })
            .then(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterData = function (e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = recipe.filter(function (fil) {
            const lowerCaseName = fil.title.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });

        setFilter(filteredArray);
    };

    if (loading) return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Recipes..</h1>

    return (
        <Container>
            <Row>
                <h1>🍽 Recipe Puppy</h1>
                <SearchRecipe filterSearch={filterData} />
                {filterRecipe.map(recipes => {
                    const { title, thumbnail, ingredients, href } = recipes;

                    return (
                        <RecipeItem title={title} image={thumbnail} ingredients={ingredients} link={href} />
                    );
                })}
            </Row>
        </Container>
    );
}

export default RecipeList;
