import { useState, useEffect } from 'react'
import { Container, Row } from "react-bootstrap"
import CategoryCard from './CategoryCard';

export default function CategoriesList() {

    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8000/api/ext/items", {
                method: "GET"
            });

            const categories = await response.json()
            setCategories(categories)
            setIsLoading(false)
        })();
    }, []);

    if (isLoading) {
        return <div><h1>Loading...</h1></div>
    }

    //getAllCategories
    function getAllCategories() {
        (async () => {
            const response = await fetch("http://localhost:8000/api/ext/items", {
                method: "GET"
            });

            const categories = await response.json()
            setCategories(categories)
            setIsLoading(false)
        })();
    }

    return (
        <Container fluid>
            <Row sm={2} lg={4} className='justify-content-evenly'>
                {categories && categories.map((category) =>
                    <CategoryCard
                    key = {category.categoryId}
                    category = {category} />
                )}
            </Row>
        </Container>
    )
}
