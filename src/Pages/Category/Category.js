import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ topic }) => {
    const { id, title, logo, price } = topic;
    return (
        <div className='topic text-white text-center border-1 w-100'>
            <img src={logo} alt="" />
            <p className='fw-bold px-2'> {title} </p>
            <p> <span className='fw-bold'>Price:</span> {price}</p>
            <button type="button" className="category-button fw-bold  border-0  rounded  py-2 text-white text-center"><Link className='text-white' to={`/courseCategories/${id}`}>More Details</Link></button>
        </div>


    );
};

export default Category;


