import React from 'react'

const Blog = () => {
    return (
        <div>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <a href="/blogs/some">
                                <div className="card mb-3" style={{ maxWidth: '100%' }}>
                                    <div className="row g-0 p-4">
                                        <div className="col-md-4">
                                            <img src="img/blog1.jpg" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">What researchers tells about reading of printed books</h5>
                                                <p className="card-text text-dark">Here's what you need to know about reading books.</p>
                                                <p className="card-text"><small className="text-body-secondary text-dark">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>
                            <a href="/">
                                <div className="card mb-3" style={{ maxWidth: '100%' }}>
                                    <div className="row g-0 p-4">
                                        <div className="col-md-4">
                                            <img src="img/blog2.jpg" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Now you can be a published author in a few days.</h5>
                                                <p className="card-text text-dark">Learn how you can published owner easily.</p>
                                                <p className="card-text"><small className="text-body-secondary text-dark">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </a>


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

export default Blog