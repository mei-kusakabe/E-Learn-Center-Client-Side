import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Categories.css'

const Categories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div >
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block my-5'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        <div className='categories m-5 px-5 rounded'>
                            <h2 className='fw-bold pt-5 heading animate'>All Courses</h2>
                            <div className='topic-all py-5 border-0'>

                                {
                                    categories.map(topic => <Category
                                        key={topic.id}
                                        topic={topic}> </Category>)
                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>


    );
};

export default Categories;