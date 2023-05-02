import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefInfo = ({chef}) => {
    const {id,picture,description,chef_name,years_of_experience,num_of_recipes,likes}=chef;
    return (
        <div>
            <h2>{id}</h2>
 <div className=''>

<Container>
<Row xs={1} md={2} lg={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx} lg={4}>
          <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title >{chef_name}</Card.Title>
              <Card.Text className='d-flex align-items-center'><p>Experience</p><small> {years_of_experience}</small></Card.Text>
              <Card.Text>
                <p>Number Of Recipe</p>
                {num_of_recipes}
              </Card.Text>
              <Card.Text>
                <p>Likes</p>
                {likes}
              </Card.Text>
          <Button variant="primary">View Recipe</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
</Container>
 </div>

        </div>
    );
};

export default ChefInfo;