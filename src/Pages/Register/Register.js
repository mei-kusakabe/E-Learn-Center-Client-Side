import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser, FaCameraRetro } from "react-icons/fa";

import "./Register.css"

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail, setUser } = useContext(AuthContext);
    useTitle('Register')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        // <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center my-3 mx-5 px-3 py-5 border rounded-3 form">
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         < Form.Label > Your Name</Form.Label >
        //         <Form.Control name="name" type="text" placeholder="Your Name" />
        //     </Form.Group >
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Photo URL</Form.Label>
        //         <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control name="email" type="email" placeholder="Enter email" required />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control name="password" type="password" placeholder="Password" required />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //         <Form.Check
        //             type="checkbox"
        //             onClick={handleAccepted}
        //             label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
        //     </Form.Group>
        //     <Button variant="primary" type="submit" disabled={!accepted}>
        //         Register
        //     </Button>
        //     <Form.Text className="text-danger">
        //         {error}
        //     </Form.Text>
        // </Form >

        <div className="container-fluid vh-100">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mt-3">
                        <div className="text-center">
                            <h3 className="text-white fw-bold fs-2 y">Welcome to Register Page!!</h3>
                        </div>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center border shadow-lg rounded-3 bg-light ">
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaUser></FaUser> </span>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaCameraRetro></FaCameraRetro> </span>
                                    <input type="text" className="form-control" name="photoURL" placeholder="Photo URL" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>

                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        onClick={handleAccepted}
                                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                                </Form.Group> */}

                                <Button variant="primary" className="btn-xl fw-bold" type="submit" disabled={!accepted}> Register</Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                                <hr />

                                <p className='mt-3 y'>Already an User? <Link to="/login"> <span className='fw-bold'>Login</span></Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;