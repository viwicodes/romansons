import React, { useEffect } from 'react'
const Testimonials = () => {
    useEffect(() => {
        var evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
    }, [])
    return (
        <>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                        <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-1.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Dr. Mini Joseph</h4>
                                    <small className="text-uppercase"> Assistant Professor & HOD, Dept. of Home Science, Government College for Women, Thiruvananthapuram, Kerala</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                I can’t applaud Romanson Printing & Publishing House enough. They were very professional and assisted me at every stage of the process. They helped me publish two books and made my dream come true
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Dr. I. Shibi</h4>
                                    <small className="text-uppercase">Associate Professor (Retd), Dept. of Chemistry, Sree Narayana College, Thiruvananthapuram
                                          Academic Coordinator, Sreenarayanaguru Open University, Kollam, Kerala</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                It was quite an amazing experience collaborating with you and I cherish the way you have planned it, accomplishing the publication within the agreed timeline.
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-3.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Dr. S. Jayadev</h4>
                                    <small className="text-uppercase">Assistant Professor, PG Dept. of Commerce & Research Centre, Mahatma Gandhi College, Thiruvananthapuram, Kerala</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Appreciate your cheerful professionalism, timely emails and explanatory phone conversations. I loved the way my book came about and if I ever write again I would be more than glad to avail your services.
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-4.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Dr. Padmakumar Munjinad</h4>
                                    <small className="text-uppercase"> Writer & Critic</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Publishing my book was so convenient and well ordered. Never thought that publishing a book could be trouble-free! Fondly anticipate working with the same team, in the future too!
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Prof. G. Gopalakrishnan</h4>
                                    <small className="text-uppercase">Former Deputy Director of Collegiate Education, Kerala
                                          Former Principal, University College, Thiruvananthapuram, Kerala
                                          Former Principal Govt. Brennen College, Thalassery, Kerala</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                It is my great pleasure to collaborate with team Romanson Printing & Publishing House Pvt. Ltd.  The emails are always responded to without delay and the staff is very patient and responsible. I am looking forward for future collaborations.
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{ width: "60px", height: "60px" }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Dr. Shiny Thomas</h4>
                                    <small className="text-uppercase">Assistant Professor, Dept. of Malayalam, Mar Thoma College Tiruvalla, Kerala</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                I would like to express all my admiration and gratitude to Romanson Printing & Publishing House Pvt. Ltd, for their professionalism.  Looking forward for future collaborations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials