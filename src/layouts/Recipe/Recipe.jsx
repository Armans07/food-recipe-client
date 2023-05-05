import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaHeart, FaRegStar, FaRegThumbsUp, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Recipe = () => {
    const recepies = useLoaderData()
    console.log(recepies)
    const { description, chef_name, num_of_recipes, picture, recipes, years_of_experience, likes} = recepies;

    const handleClick = event => {
        event.currentTarget.disabled = true;
        toast('Added Favourite')

    }

    return (
        <Container className='ms-5'>
            <div className=' mt-5 d-md-flex justify-content-between'>
                <img className='img-fluid rounded-start' style={{ height: "250px", width: "500px" }} src={picture} alt="" />
                <div className=' mx-5'>
                    <p><span className='fw-bold'>Chef Name :</span> <small>{chef_name}</small></p>
                    <p><small><span className='fw-bold'>Description :</span> {description}</small></p>
                    <p><small><span className='fw-bold'>Number of Recipe :</span> {num_of_recipes}</small></p>
                    <p><small><span className='fw-bold'>Experience :</span> {years_of_experience}</small></p>
                    <div>
                            <FaRegThumbsUp /> {likes}
                        </div>
                </div>

            </div>
            <section className='d-flex gap-4 my-5 mx-auto'>
                {
                    recipes.map(rs => <div
                        key={rs.name}
                    >
                        <Card style={{ width: '18rem' }}>

                            <LazyLoadImage
                                alt={""}
                                height={rs.height}
                                scrollPosition={rs.scrollPosition}
                                src={rs.recipe_img} 
                                width={rs.width} />

                            <Card.Body>
                                <Card.Title>{rs.name}</Card.Title>
                                <Card.Text>
                                    <p><small>Method of cooking</small></p>
                                    {rs.method_of_cooking}
                                </Card.Text>
                                <hr />
                                <Card.Text>
                                    <p><small>Ingredients</small></p>
                                    {rs.ingredients}
                                </Card.Text>
                                <Card.Footer>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex gap-1 align-items-center'>
                                            <Rating
                                                placeholderRating={rs.ratings}
                                                readonly
                                                emptySymbol={<FaRegStar />}
                                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                                fullSymbol={<FaStar />}
                                            > </Rating>
                                            <span>{rs.ratings}</span>
                                        </div>
                                        <div>
                                            <Button variant='success' onClick={handleClick}><FaHeart></FaHeart></Button>
                                        </div>
                                        <ToastContainer> </ToastContainer>

                                    </div>
                                </Card.Footer>

                            </Card.Body>
                        </Card>
                    </div>)
                }
            </section>

        </Container>
    );
};

export default Recipe;