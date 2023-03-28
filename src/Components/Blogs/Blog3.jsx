import React from 'react'
import Nav from '../Common/Nav'
import Hero from './Hero'

function Blog3() {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="mb-5">
                                <img className="img-fluid w-100 rounded mb-5" src="img/blog3.jpg" alt="" />
                                <h1 className="mb-4">Now you can be a published author in a few days.</h1>
                                <p>Forget the tasks behind publishing a book now, whether you are a writer or new to writing. Do you have an ambition to be an author, now it is the right time for that? Forget about who you are and what your idea is !
                                    If you have a book idea or an idea in mind or is not completed a draft or note the idea with in your thought, and or your scripts are not completed so far, then we are happy to help you to complete your writing project in any number of page with or without pictures and illustrations. If you want to publish your idea as a printed book in your name and with your credential, just talk to our publication executive.  He will exclusively work for your unique project. We have the lot of talented and experienced hands have special caliber in writing your idea in the paper whether it is small or big. Our writing experts will organize it in papers with deep and wide meaning in 30000 to 70000 words as per your requirement of length. All you need to do is to talk your idea to the book expert and the rest he will do for you. What he can do is, he will prepare, edit, organize, design, register for ISBN, and he will publish it for you in a short period. All you need to share your idea of the book ,in any language and style.  It can be children's book, story, novel, biography, documentary, historical, travelogues and or critics.</p>
                                <p>Whether it is a single title or series   of titles in multiple volumes.
                                    We have unique approaches towards every writer and their thoughts who want to be a publisher in categories of publications. Our publican experts and consent departments are aware to organize the approaches and treatments for the readers of every category. We respect the mind of kids, teen, young and adults, and, their thought process and expectations in a book. We have categorization based on different perspective as per the expectations of every reader.
                                    Furthermore, we know how to give priority of your topics and how to be  presented it.
                                    The pendulum of the clock is not stopping for micro minute moments. Similarly, the trend of everything is changing without changes. And the society is changing than the speed as we are reading this passage. Hence, observing, understanding and feeling the pulse is very important in everyday life connecting to the society.
                                    Our social observation system is very alerted for input to the database with our specific and organized system. We are happy to provide any facilities   for your unique requirements.
                                    We can prepare your first draft and after reading that draft by yourself, we will make corrections as per your outlook on the script.
                                    Do not hesitate to talk to our book experts today itself.</p>

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
                                    <a href="/blogs/reading-of-printed-books" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Now you can be a published author in a few days.</a>
                                </div>
                                <div className="d-flex rounded overflow-hidden mb-3">
                                    <img className="img-fluid" src="img/blog1.jpg" style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                    <a href="/blogs/now-you-can-be-a-published" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">What researchers tells about reading of printed books</a>
                                </div>
                                <div className="d-flex rounded overflow-hidden mb-3">
                                    <img className="img-fluid" src="img/blog1.jpg" style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
                                    <a href="/blogs/now-you-can-be-a-published-in-a-few-days" className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">What researchers tells about reading of printed books</a>
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

export default Blog3