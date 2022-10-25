import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
// import RightSideNav from '../Pages/RightSideNav/RightSideNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;