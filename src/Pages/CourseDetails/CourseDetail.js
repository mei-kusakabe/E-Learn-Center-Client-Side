import React from 'react';
import Pdf from "react-to-pdf";
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import "./CourseDetails.css"

const ref = React.createRef();
const CourseDetail = () => {
    const categories = useLoaderData();
    console.log(categories);


    return (
        <div>
            <div className='course-details'>
                <Container>
                    <Row>
                        <Col lg="3" className='d-none d-lg-block my-5'>
                            <LeftSideNav className="left"></LeftSideNav>
                        </Col>
                        <Col lg="9">
                            <div className='d-flex flex-column justify-content-center align-items-center mx-5'>
                                {/* <h2 className='fw-bold mt-5'>{ }</h2> */}
                                <Pdf targetRef={ref} filename="course-details.pdf">
                                    {({ toPdf }) => <div>  <h3 className='mt-5 y'>Download Details Information..</h3>
                                        {/* style={{ textDecoration: 'none', color: "#2B3467" }} */}
                                        <button className="px-5 py-2 fw-bold text-white my-3 border-0 rounded custom-button" onClick={toPdf}>Generate Pdf</button></div>
                                    }
                                </Pdf>
                                <div className='mb-5 border-0' ref={ref}>
                                    {
                                        categories.map(topic => <div className='mt-5  px-5 py-3 card'
                                            key={topic.id}
                                            topic={topic}>
                                            <h2 className='fw-bold y'>{topic.name}</h2>
                                            <img src={topic.logo} alt="Course-Img" className="card-img-top" />
                                            <h5 className="card-title mt-2 y">{topic.name}</h5>
                                            <div className=''>
                                                <p className="card-text">{topic.description}</p>
                                                <div className='d-flex justify-content-around'>
                                                    <p className="card-text fw-bold"> <span>Price: </span>{topic.price}</p>


                                                    <Link to={`/checkout/${topic.category_id}`}>
                                                        <button className="category-button fw-bold  border-0  rounded  py-2 text-white text-center">
                                                            Get Premium Access
                                                        </button>
                                                    </Link>


                                                </div>

                                            </div>
                                        </div>)

                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >
        </div >

    );
};


export default CourseDetail;