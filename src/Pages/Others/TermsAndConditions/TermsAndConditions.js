import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <ul>
                <li>
                    You can't sign in from more than one device.
                </li>
                <li>
                    You have to accept all our rules and regulation.
                </li>
            </ul>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;