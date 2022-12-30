import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://e-learn-centre-server.vercel.app/courseCategories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='p-4  border left rounded'>
            {/* <h4>All Category : {categories.length}</h4> */}
            <h5 className='fw-bold mb-4 heading'>All Available Courses</h5>
            {
                categories.map((category, i) =>
                    <p className='text-start' key={category.id}>
                        <Link className="fs-6" to={`/courseCategories/${category.id}`} style={{ textDecoration: 'underline', color: "#2B3467" }}> <span className='fw-bold text-start'>{i + 1}. {category.name}</span></Link>
                    </p>
                )
            }

        </div>
    );
};

export default LeftSideNav;