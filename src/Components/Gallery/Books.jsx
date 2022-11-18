import React from 'react'
import Footer from '../Common/Footer'
import Nav from '../Common/Nav'
import Hero from './Hero'

const Books = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">Books</h5>
                        {/* <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1> */}
                    </div>
                </div>
            </div>
            <div className="container">


                <div className="gallery">

                    <div className="gallery-item">
                        <img className="gallery-image" src={require('./bookGallery/dist/img/1.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt="sunset behind San Francisco city skyline" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/2.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/3.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/4.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/5.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/6.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>
                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/7.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>
                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/8.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>
                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/9.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>
                    <div className="gallery-item">
                        {/* <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" /> */}
                        <img className="gallery-image" src={require('./bookGallery/dist/img/10.jpg')} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Books