import React from 'react';
import Blog from '../Blog/Blog';
import Categories from '../Categories/Categories';
import FAQ from '../FAQ/FAQ';
import './Home.css';
const Home = () => {
    return (
        <div>
            <section className='header-section py-5 text-center bg-image'>
                <div className="mask">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="mb-5 text-black fw-bold heading text-white">E-learning Centre</h1>
                            <h4 className="mb-3 fst-italic text-center text-white quote">“Anyone who stops learning is old, whether at twenty or eighty.”<br></br> Anyone who keeps learning stays young.” ~ Henry Ford</h4>
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