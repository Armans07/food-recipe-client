import React from 'react';

const FoodItem = () => {
    return (
        <div>
            <div className='my-5'>
                <h3 className='text-center mb-4'><small className='text-success '> Our Delicious </small><br />
                    <b>Famous Food Items</b></h3>
                <div className="card-group gap-5 ">
                    <div className="card border border-0 Regular shadow">
                        <img src="https://img.freepik.com/free-photo/curry-fried-rice_1339-1809.jpg?w=740&t=st=1683304945~exp=1683305545~hmac=c3233f5bf21a0f16e6b52f41cede4151fbd7616cce84a62c926230cf5da119e5" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Vuna khicuri</h5>
                            <p><span className='fw-bold'>Ingredient :</span> Milk, lemon juice, sugar, water, and cardamom.</p>
                            <p><span className='fw-bold'>Cooking Method :</span> Boil milk, curdle with lemon juice, strain, form into small balls, boil in sugar syrup with cardamom and water.</p>
                            <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating : </span> 4.9 out of 5</small></p>
                        </div>
                    </div>
                    <div className="card border border-0 Regular shadow">
                        <img src="https://img.freepik.com/free-photo/high-angle-pakistan-meal-composition_23-2148821517.jpg?w=740&t=st=1683304884~exp=1683305484~hmac=30687fde81c214dbb3af2d9f4686ffc20a9e455621208bbe949820183cda2f40" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Biriyani</h5>
                            <p><span className='fw-bold'>Ingredient :</span> Rice, Lentils, Onion, Ginger, Cumin, Turmeric, Salt, Water</p>
                            <p><span className='fw-bold'>Cooking Method : </span> Cook all ingredients together in a pressure cooker until soft and mushy, then temper with fried onions and ghee.</p>
                            <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating :</span>  4.8 out of 5</small></p>
                        </div>
                    </div>
                    <div className="card border border-0 Regular shadow">
                        <img src="https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table-flat-lay-top-view_2829-19929.jpg?w=740&t=st=1683304989~exp=1683305589~hmac=600adaf9f9f6c8bea6e350286a3606b53bf63d2de530d7444d7a9723b4687b50" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Fish fry</h5>
                            <p><span className='fw-bold'>Ingredient :</span> 500g telapiya , vegetable oil , to Glaze Flour , Dash Salt</p>
                            <p><span className='fw-bold'>Cooking Method :</span> Wash the fish under the cold tap.Roll in the flour and deep fry in oil until crispy.Lay on kitchen towel to get rid of the excess oil and serve hot or cold with a slice of lemon.</p>
                            <p className="card-text"><small className="text-body-secondary"><span className='fw-bold'>Rating :</span> 4.9 out of 5</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;