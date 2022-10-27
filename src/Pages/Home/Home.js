import React from 'react';
import Blog from '../Blog/Blog';
import Categories from '../Categories/Categories';
// import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='header-section p-5 text-center bg-image'>
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-black">
                            <h1 className="mb-5 text-black fw-bold">E-learning Centre</h1>
                            <h4 className="mb-3 fst-italic text-center text-white">“Anyone who stops learning is old, whether at twenty or eighty.”<br></br> Anyone who keeps learning stays young.” ~ Henry Ford</h4>
                            <a className="mb-3 btn btn-outline-light btn-lg fw-bold" href="/courseCategories" role="button"
                            >Go to Courses</a
                            >
                        </div>
                    </div>
                </div>
            </section>
            <div className='text-center'>
                <Categories></Categories>
            </div>
            <div className='text-center'>
                <Blog></Blog>
            </div>
            <div className='text-center'>
                <FAQ></FAQ>
            </div>

        </div>
    );
};

export default Home;