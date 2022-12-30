import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container my-5 py-5 blog border rounded'>
            <section className="container" id="blog">
                <div className="blog-header text-center">
                    <h1 className="display-5 text-white fw-bold y">Blog Page
                    </h1>
                    {/* <p className="fs-5 text-white text-wrap text-center">Here is the list of most commonly asked web
                        development interview questions for freshers and experienced candidates.</p> */}
                </div>
                <section className="blog-body mt-5">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fw-bold text-black fs-4" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    What is cors?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Cross-origin resource sharing (CORS) is a mechanism that allows a client application to request restricted resources hosted on server from a different origin. These resources may include; web fonts, videos, scripts, iframes, images and stylesheets. By default, client applications making AJAX requests are only allowed to request resources that live on the same origin as the location where the client application is running.CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. If an application running on different domain tries to make a XMLHttpRequest to a different domain, it will be blocked by same-origin policy.
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </button>

                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Firebase provides detailed documentation and cross-platform SDKs to help us build and ship apps on Android, iOS, the web, C++, and Unity.Benefits of using Firebase:

                                        <ol className='y'><b>Google Analytics For Firebase: </b> Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting.</ol>
                                        <ol className='y'><b>Realtime Database & Firestore: </b>Firebase was originally developed to be a realtime database, and today that is still one of its key features.</ol>
                                        <ol className='y'><b>Authentication: </b>Firebase allows users to authenticate with their phone number, email, Google,Facebook accounts and so on. </ol>
                                        <ol className='y'><b>Crashlytics: </b>Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality.</ol>
                                        <ol className='y'><b>Free Use of Dynamic Links: </b>Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don’t have the app installed. </ol>
                                        <div className='text-start y'>
                                            Other options to implement Authentication are:
                                            <li className='y'>STYTCH</li>
                                            <li className='y'>Ory</li>
                                            <li className='y'>Supaba</li>
                                            <li className='y'>Okta</li>
                                            <li className='y'>PingIdentity</li>
                                            <li className='y'>Keycloak</li>
                                            <li className='y'>Frontegg</li>
                                            <li className='y'>Authress</li>
                                            <li className='y'>Auth0</li>
                                            <li className='y'>Amazon Cognito</li>
                                            <li className='y'>OneLogin</li>
                                        </div>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    How does the private route work?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                <button className="accordion-button fw-bold text-black fs-4 collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"
                                    aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                    What is Node? How does Node work?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingFour">
                                <div className="accordion-body">
                                    <h6 className="text-muted text-start y">
                                        Node JS is a JavaScript runtime environment.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                                        <br /> <br />
                                        Node accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept: Asynchronous,Non-blocking I/O.
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

export default Blog;