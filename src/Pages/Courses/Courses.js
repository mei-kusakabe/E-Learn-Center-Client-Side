import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';
const Courses = () => {
    return (
        <div className='text-center'>
            <Container>
                <Row>
                    <Col lg="2" className='d-none'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;