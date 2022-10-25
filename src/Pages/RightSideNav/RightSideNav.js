import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";


const RightSideNav = () => {
    // const { providerLogin } = useContext(AuthContext);

    // const googleProvider = new GoogleAuthProvider()

    // const handleGoogleSignIn = () => {
    //     providerLogin(googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => console.error(error))
    // }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={(null)} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;