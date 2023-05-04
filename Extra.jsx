import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ViewRecepi = () => {
    const recepies = useLoaderData()
    console.log(recepies)
    const {id,description,likes,name,num_recipes,picture,recipes,years_of_experience} = recepies;
    return (
        <Container>
            <div className=' mt-5 d-md-flex justify-content-between'>
            <img className='img-fluid rounded-start'  style={{height:"250px", width:"500px"}} src={picture} alt="" />


            <div className=' mx-5'>
                <p><span className='fw-bold'>Chef Name :</span> <small>{name}</small></p>
                <p><small><span className='fw-bold'>Description :</span> {description}</small></p>
                <p><small><span className='fw-bold'>Number of Recepi :</span> {num_recipes}</small></p>
                <p><small><span className='fw-bold'>Experience :</span> {years_of_experience}</small></p>
            </div>

            </div>
            <section className='row row-cols-1 row-cols-md-3 g-4 my-5'>
                {
                    recipes.map(rs => <div
                    key={rs.name}
                    >
                      <div className='col'>
                    <div className='card p-4'>
                        
                   <span className='fw-bold '> Name: <small>{rs.name} </small></span><br />
                   <span className='fw-bold '> Ingredients:</span>
                    {
                        rs.ingredients.map(ing => <p className='my-0'>{ing}</p>)
                    }
                   <p><span className='fw-bold my-3'>Method of cooking:</span> {rs.method_of_cooking}</p>
                 
                    </div>
                 </div>
                    </div>)
                }
            </section>

        </Container>
    );
};

export default ViewRecepi;