import React from 'react'
import Nav from '../Common/Nav'
import Hero from './Hero'

function Blog1() {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="mb-5">
                                <img className="img-fluid w-100 rounded mb-5" src="img/blog1.jpg" alt="" />
                                <h1 className="mb-4">What researchers tells about reading of printed books</h1>
                                <p>As per the research of the international agencies, reading of books are ideal for registering data
                                    directly to the brain. This report is following the developmental agencies and band builders
                                    universally.</p>
                                <p>We have three situations there to study about this. As we know, prior to 5 th century AD, there was
                                    no literature in any form for to imagination and chit-chatting to the society.</p>
                                <p>Writing about anything has been developed as the part of culture and social development. Upon
                                    writing the Magha duta of Kalidasa, on 5th century created a history in writing and is known as the
                                    first book ever. Up to that the people are unaware about someone can create a story through words
                                    or letters. And languages are not developed properly. Slowly Sanskrit literature was established as a
                                    language and literature and the first book is written by poet Kalidasa. And upon that our culture is
                                    changed to a literate community.</p>
                                <p>For several centuries scribes where taken role for copying from one script to another copy by their
                                    hands. Copying and writing another copy is done by the scribes.</p>
                                <p>Things where changed in the year 1436 in the area of book writing and printing, after the innovation
                                    of printing press. A German goldsmith named Johannes Gutenberg invented the printing press. After
                                    the innovation of printing press people started to observe it as a miracle and that is helped to print
                                    large number of copies for every book.Language is also not a limited topic for this machine, that
                                    printed the loaded fronts. Our culture of reading of book is started here and reading culture is
                                    started here.</p>
                                <p>We have three situations in front of us for analysing the importance of printed books. They are the
                                    ascribing period, after the period of printing press innovation and COVID 19. The after effect of
                                    COVID created the situations for digital learning and reading. This situation forced readers in all ages
                                    and children to avail digital instruments like smartphone, tablet and computer. Most of the children
                                    are first time users for such digital equipment.</p>
                                <p>As per the report the act of COVID has been damaged the printing and publishing industry for a
                                    limited period of two years and of course that affected the reading habits of the learners and
                                    enthusiast.</p>
                                <p>Traditional reading habits of the society has been reinstalled and popularity of the printed book is
                                    regained.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3" placeholder="Keyword" />
                                    <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                                </div>
                            </div> */}

                            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0">Categories</h3>
                                </div>
                                <div className="link-animated d-flex flex-column justify-content-start">
                                    <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Design</a>
                                    <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                    <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Web Development</a>
                                    <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</a>
                                    <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</a>
                                </div>
                            </div> */}
                            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0">Recent Post</h3>
                                </div>
                                <div className="d-flex rounded overflow-hidden mb-3">
                                    <img className="img-fluid" src="img/blog2.jpg" style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                    <a href="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Now you can be a published author in a few days.</a>
                                </div>
                                <div className="d-flex rounded overflow-hidden mb-3">
                                    <img className="img-fluid" src="img/blog1.jpg" style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                    <a href="" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">What researchers tells about reading of printed books</a>
                                </div>
                            </div>

                            {/* <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                            </div>
                            <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0">Tag Cloud</h3>
                                </div>
                                <div className="d-flex flex-wrap m-n1">
                                    <a href="" className="btn btn-light m-1">Design</a>
                                    <a href="" className="btn btn-light m-1">Development</a>
                                    <a href="" className="btn btn-light m-1">Marketing</a>
                                    <a href="" className="btn btn-light m-1">SEO</a>
                                    <a href="" className="btn btn-light m-1">Writing</a>
                                    <a href="" className="btn btn-light m-1">Consulting</a>
                                    <a href="" className="btn btn-light m-1">Design</a>
                                    <a href="" className="btn btn-light m-1">Development</a>
                                    <a href="" className="btn btn-light m-1">Marketing</a>
                                    <a href="" className="btn btn-light m-1">SEO</a>
                                    <a href="" className="btn btn-light m-1">Writing</a>
                                    <a href="" className="btn btn-light m-1">Consulting</a>
                                </div>
                            </div> */}

                            {/* <div className="wow slideInUp" data-wow-delay="0.1s">
                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                    <h3 className="mb-0">Plain Text</h3>
                                </div>
                                <div className="bg-light text-center" style={{ padding: "30px" }}>
                                    <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                    <a href="" className="btn btn-primary py-2 px-4">Read More</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog1