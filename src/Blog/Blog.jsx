import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <Container>
            <Navbar></Navbar>

            <h2 className='text-center text-success fw-bold text-underline'>Questions Area</h2>
            <div ref={ref}>

                <p className='text-danger mb-0'>1. What is controlled and uncontrolled components?</p>
                <h5>Answer : <span className='text-success'>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</span></h5>
                <p className='text-danger mb-0'>2. What are the properties of props in React?</p>
                <h5>Answer: <span className='text-success'>The props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.</span></h5>
                <p className='text-danger mb-0'>3. What is the difference between node.js and express.js</p>
                <h5>Answer: <span className='text-success'>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</span></h5>
                <p className='text-danger mb-0'>4. What is custom hook? Why is it used?</p>
                <h5>Answer: <span className='text-success'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</span></h5>
                <div className='text-center my-5'>
                    <Pdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <Button variant='success' onClick={toPdf}>Download PDF</Button>
                        )}
                    </Pdf>

                </div>
            </div>

            <Footer></Footer>
        </Container>
    );
};

export default Blog;