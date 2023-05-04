import React, { useEffect, useState } from 'react';
import ChefsLayout from '../../layouts/layout/ChefsLayout/ChefsLayout';
import { Container } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://food-recipe-armans07.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <Container>

            <div className='row row-cols-1 row-cols-md-2 mt-5'>
                {
                    chefs.map(chef => <ChefsLayout
                        key={chef.id}
                        chef={chef}
                    >
                    </ChefsLayout>)
                }
            </div>
        </Container>

    );
};

export default Chefs;