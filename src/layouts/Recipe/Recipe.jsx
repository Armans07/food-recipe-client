import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData()
    const {id,picture,chef_name,years_of_experience,num_of_recipes,likes}=recipes; 
    return (
        <div className='d-flex justify-content-center'>
                <Card className="w-50 mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Card.Img variant="top" src={picture} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{chef_name}</Card.Title>
                <Card.Text>
                    <p><small>Years of Experience: {years_of_experience}</small></p>
                    <div className='text-muted d-flex'>
                        <div className='flex-grow-1'>
                            <p><small>Number of Recipes: {num_of_recipes}</small></p>
                        </div>
                        <div>
                            <FaRegThumbsUp /> {likes}
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Link to={`/chefs/${id}`}><Button className='w-100 text-semibold' variant="success">View Recipe</Button></Link>
            </Card.Footer>
        </Card>
        </div>
    );
};

export default Recipe;