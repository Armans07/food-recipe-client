import React, { useEffect, useState } from 'react';
import ChefInfo from '../ChefInfo/ChefInfo';

const Chef = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                chefs.map(chef => <ChefInfo
                    key={chef.id}
                    chef={chef}>
                    
                </ChefInfo>)
            }

        </div>
    );
};

export default Chef;