import React from 'react'

import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section className="section" id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-12">
                        <div className="left-text-content">
                            <div className="section-heading">
                                <h6>Contact Us</h6>
                                <h2>Feel free to reach out to me!</h2>
                            </div>
                            <ul className="contact-info" data-aos="fade-right">
                                <li><h2 style={{ display: 'inline' }}><i className="fa fa-phone mr-2"></i></h2>587-435-7475</li>
                                <li><h2 style={{ display: 'inline' }}><i className="fa fa-envelope mr-2"></i></h2>mz2chen@uwaterloo.ca</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-xs-12">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contact