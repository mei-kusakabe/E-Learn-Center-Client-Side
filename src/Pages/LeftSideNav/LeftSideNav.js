import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courseCategories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='p-3 border'>
            <h4>All Category : {categories.length}</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/courseCategories/${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default LeftSideNav;