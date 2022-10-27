import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://e-learn-centre-server.vercel.app/courseCategories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='p-2 border left rounded'>
            {/* <h4>All Category : {categories.length}</h4> */}
            <h4 className='fw-bold'>All Available Courses</h4>
            {
                categories.map((category, i) => <p key={category.id}>
                    <Link to={`/courseCategories/${category.id}`}> <span className='fw-bold'>{i + 1}.</span>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;