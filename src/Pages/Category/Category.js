import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ topic }) => {
    const { name, title, logo, price } = topic;
    return (
        <div className='topic m-5 text-center border-1 p-0 w-75'>
            <img src={logo} />
            <h4 className='p-3'>Title: {title} </h4>
            <h4> Price: {price}</h4>
            <button type="button" className="btn btn-info px-5 py-2 fw-bold text-white my-3"><Link to={``}>More Details</Link></button>
            {/* <button class="button"> <Link to={`/quiz/${id}`}>Test yourself</Link></button> */}
        </div>


    );
};

export default Category;


