import Head from "next/head"

import Container from "../Components/container"
import ContactCss from '../../styles/contact.module.css'

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"

const contact_us = () => {
    return (
        <>

        <Head>   
            <title>Contact Us</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />   
        </Head>

        <Navbar />

        <Container>

            <div id={ContactCss.contact_heading} className='text-center'>
                <h1>Contact Us</h1>
                <p>We reply uber fast! (No, really!)</p>
                <p>Contact us now if you have any questions about our services. We’ll get back to you in minutes</p>
            </div>

            <div id={ContactCss.get_in_touch}>
                <h3>Get in Touch</h3>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Clipping Path Graphics is one of the trusted Clipping Path Service Provider in 2022. We have the experience of working in this field. Almost 5 years and working with hundred clients from all over the world.</p>

                            <h4>Call us</h4>
                            <p><i className="fa-solid fa-phone"></i> +1 (304) 574-8370</p>

                            <h4>Email</h4>
                            <p className="mb-0"> <i className="fa-solid fa-envelope"></i> info@clippingpathgraphics.com</p>
                            <p><i className="fa-solid fa-envelope"></i> clippingpathgraphics@gmail.com</p>

                            <h4>Visit Us</h4>
                            <p className="mb-0"><i className="fa-solid fa-house"></i> US Office: 10126 ADOBE DRIVE Houston TX 77095</p>
                            <p><i className="fa-solid fa-house"></i> BD Office: Bicon more collage road, Rangpur</p>
                        </div>
                        <div className="col-lg-6">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6 mt-3">
                                        <input type="text" className="form-control form-control-lg" placeholder="Name" />
                                    </div>
                                    <div className="col-lg-6 mt-3">
                                        <input type="email" className="form-control form-control-lg" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <input type="text" className="form-control form-control-lg" placeholder="Subject" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <textarea name="" id="" cols="30" rows="6" className="form-control form-control-lg" placeholder="Message"></textarea>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-lg">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </Container>

        <Footer />
        </>
    )
}

export default contact_us