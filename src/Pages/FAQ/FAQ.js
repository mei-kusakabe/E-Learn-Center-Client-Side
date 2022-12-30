import React from 'react';
import './FAQ.css'

const FAQ = () => {
    return (
        <div className='container my-5 py-5 faq border rounded'>
            <section className="faq container" id="faq">
                <div className="faq-header text-center">
                    <h1 className="display-5 text-white fw-bold y">Frequently Asked Questions
                    </h1>
                    <p className="fs-5 text-white text-wrap text-center">Here is the list of most commonly asked  questions from users.</p>
                </div>
                <section className="faq-body mt-5">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold text-black fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What are some of the advantages of attending college online?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Online education is known for its flexibility, but studies have identified several additional benefits of attending class online. Among them:
                                        <ul className='text-start'>
                                            <li className='y'>
                                                <span className='fw-bold'>Communication: </span>  Many students are more comfortable engaging in meaningful discussions online than in a classroom. These students might have hearing or speech impairments; speak different languages; have severe social anxiety; or simply need more time to organize their thoughts.
                                            </li>
                                            <li className='y'>
                                                <span className='fw-bold'>Personalized learning: </span>  Not all students learn the same way. Web-based learning allows instructors to deliver the same content using different media, like videos or simulations, personalizing learning. Online classes providing round-the-clock access to materials and lectures also let students study when they feel most focused and engaged.
                                            </li>
                                            <li className='y'>
                                                <span className='fw-bold'>Accessibility: </span> Online programs transcend time, geographic, and other barriers to higher education. This can be helpful for those who work full-time, live in remote regions, or serve in the military.
                                            </li>
                                            <li className='y'>
                                                <span className='fw-bold'> Adaptability: </span> Learning management systems that integrate text-to-speech and other adaptive technologies support learners with physical, behavioral, and learning challenges.
                                            </li>
                                            <li className='y'>
                                                <span className='fw-bold'>Efficiency:  </span>Studies show online students tend to achieve the same learning results in half the time as classroom-based students.
                                            </li>
                                            <li className='y'>
                                                <span className='fw-bold'>Engagement: </span>  Online instructors can use games, social media, virtual badges, and other engaging technologies to motivate students and enhance learning.

                                            </li>

                                        </ul>




                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Is online education as effective as face-to-face instruction?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Online education may seem relatively new, but years of research suggests it can be just as effective as traditional coursework, and often more so. According to a U.S. Department of Education analysis of more than 1,000 learning studies, online students tend to outperform classroom-based students across most disciplines and demographics. Another major review published the same year found that online students had the advantage 70 percent of the time, a gap authors projected would only widen as programs and technologies evolve.
                                        <br></br>
                                        While these reports list several plausible reasons students might learn more effectively online—that they have more control over their studies, or more opportunities for reflection—medium is only one of many factors that influence outcomes. Successful online students tend to be organized self-starters who can complete their work without reporting to a traditional classroom. Learning styles and preferences matter, too. Prospective students should research programs carefully to identify which ones offer the best chance of success.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    How do I know if online education is right for me?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Choosing the right degree program takes time and careful research no matter how one intends to study. Learning styles, goals, and programs always vary, but students considering online colleges must consider technical skills, ability to self-motivate, and other factors specific to the medium. A number of colleges and universities have developed assessments to help prospective students determine whether they are prepared for online learning. You can access a compilation of assessments from many different colleges online. Online course demos and trials can also be helpful, particularly if they are offered by schools of interest. Students can call online colleges and ask to speak an admissions representative who can clarify additional requirements and expectations.
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default FAQ;