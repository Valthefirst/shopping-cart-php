import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function CategoryCard({ category, }) {

    // const onDelete = () => {
    //     onDeleteCategoryHandler(category.categoryId)
    // }

    let image = new Image();
image.src = 'data:image/png;base64,' + category.image;

    return (
        <div className="p-3" type="button">
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img src={image} />
                <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>
                        <strong>Description: </strong>{category.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
