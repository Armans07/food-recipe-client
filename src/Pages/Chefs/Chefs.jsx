import React, { useEffect, useState } from 'react';
import ChefsLayout from '../../layouts/layout/ChefsLayout/ChefsLayout';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='row row-cols-1 row-cols-md-2 mt-5'>
            {
                chefs.map(chef => <ChefsLayout
                    key={chef.id}
                    chef={chef}
                    > 
                    </ChefsLayout>)
            }
        </div>
    );
};

export default Chefs;