import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
// import Category from '../Category/Category';
import "./CourseDetails.css"

const CourseDetail = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className='course-details'>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block my-5'>
                        <LeftSideNav className="left"></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        <div className='d-flex flex-column justify-content-center align-items-center mx-5'>
                            {/* <h2 className='fw-bold mt-5'>{ }</h2> */}
                            <div className='m-5 border-0'>

                                {/* <h2 className='fw-bold'>Course Name: {`/courseCategories/${id}.name`}</h2> */}

                                {
                                    categories.map(topic => <div className='mt-5 card'
                                        key={topic.id}
                                        topic={topic}>

                                        <img src={topic.logo} className="card-img-top" />
                                        <h5 className="card-title">{topic.name}</h5>
                                        <div className=''>
                                            {/* <span className='fw-bold'>Course Description: </span>{topic.description} */}
                                            <p className="card-text">{topic.description}</p>
                                            <a href="/premium" className="btn btn-primary mb-3">Get Premium Access</a>
                                        </div>
                                    </div>)

                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};
// <div className='course-details d-flex flex-column justify-content-center align-items-center mx-5'>
//     {/* <h2 className='fw-bold mt-5'>{ }</h2> */}
//     <div className='m-5 border-0'>
//         {
//             categories.map(topic => <div className='mt-5'
//                 key={topic.id}
//                 topic={topic}>
//                 <h2 className='fw-bold mt-5'>Course Name: {topic.name}</h2>
//                 <img src={topic.logo} className="mt-5 w-50 h-50" />
//                 <div className='mt-5'>
//                     <span className='fw-bold'>Course Description: </span>{topic.description}
//                 </div>
//             </div>)

//         }

//     </div>
// </div>


//     );
// };

export default CourseDetail;