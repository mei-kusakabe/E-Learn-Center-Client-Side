import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import "./Login.css"
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {

    const { providerLogin, setUser, setLoading, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    // const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGitSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                setLoading(false);
                setUser(user);
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    useTitle('Login')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (

        // <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5 mx-5 border rounded-3 form">
        //     <h3 className='mb-3'>Sign In</h3>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <FaEnvelope></FaEnvelope>
        //         <Form.Control name="email" type="email" placeholder="Enter email" required />

        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password </Form.Label>
        //         <FaLock></FaLock>
        //         <Form.Control name="password" type="password" placeholder="Password" required />
        //     </Form.Group>

        //     <Button variant="primary" type="submit">Login</Button>
        //     <Form.Text className="text-danger">
        //         {error}
        //     </Form.Text>
        //     <div>
        //         <ButtonGroup vertical>
        //             <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
        //             <Button onClick={handleGitSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
        //         </ButtonGroup>
        //     </div>
        //     <p className='mt-3'>Need an Account? <Link to="/register"> <span className='fw-bold'>Register</span></Link></p>
        // </Form>

        <div className="container-fluid login my-3">
            <div className="rounded d-flex justify-content-center">
                <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mt-3">
                    <div className="text-center">
                        <h3 className="text-white fw-bold fs-2">Please Log in!!</h3>
                    </div>
                    <Form onSubmit={handleSubmit} className="mt-3 py-3 border shadow-lg rounded-3 bg-light box2">
                        <div className="p-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" />
                            </div>
                            <Button variant="primary" className="btn-xl fw-bold" type="submit">Login</Button>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                            <hr />
                            <h5>OR</h5>
                            <div>
                                <ButtonGroup vertical>
                                    <Button onClick={handleGoogleSignIn} className='mb-2 fw-bold' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                                    <Button onClick={handleGitSignIn} className='mb-2 fw-bold' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
                                </ButtonGroup>
                            </div>
                            <p className='mt-3'>Need an Account? <Link to="/register"> <span className='fw-bold'>Register</span></Link></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default Login;