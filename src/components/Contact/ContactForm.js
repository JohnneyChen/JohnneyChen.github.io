import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import emailjs from 'emailjs-com'

import Fade from '../Fade'

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be atleast 2 characters long').max(30, 'Name cannot be longer than 30 characters'),
    phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    subject: yup.string().required('Subject is required').min(2, 'Subject must be atleast 2 characters long'),
    message: yup.string().required('Message is required')
})

const ContactForm = () => {
    const [disabled, setDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [emailFailed, setEmailFailed] = useState(false)

    const onFormSubmit = values => {
        setDisabled(true)
        sendEmail(values)
    }

    const sendEmail = values => {
        emailjs.send("service_ldsible", "template_rkbsopg", values, "user_hnk895uf8jwQORdhwByQV")
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text)
                formik.resetForm()
                setDisabled(false)
                setEmailSent(true)
                setTimeout(() => {
                    setEmailSent(false)
                }, 5000)
            }, function (err) {
                setDisabled(false)
                setEmailFailed(true)
                setTimeout(() => {
                    setEmailFailed(false)
                }, 5000)
                console.log('FAILED...', err);
            });
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: contactSchema,
        onSubmit: onFormSubmit
    })

    const getFormClass = name => {
        if (formik.errors[name] && formik.touched[name]) {
            return "is-invalid form-control"
        }
        if (formik.touched[name] && !formik.errors[name]) {
            return 'is-valid form-control mb-4'
        }
        return 'form-control mb-4'
    }

    return (
        <form id="contact" action="" method="get" onSubmit={formik.handleSubmit} noValidate>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <fieldset>
                        <input {...formik.getFieldProps('name')} type="text" id="name" placeholder="Your Name *" required className={getFormClass('name')} />
                        <div className="invalid-feedback mb-3" style={{ animation: `${(formik.errors.name && formik.touched.name) ? "fadeIn" : "fadeOut"} 1s` }}>
                            {formik.errors.name}
                        </div>
                    </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                    <fieldset>
                        <input {...formik.getFieldProps('phoneNumber')} type="text" id="phone" placeholder="Your Phone" className={getFormClass('phoneNumber')} />
                        {(formik.errors.phoneNumber && formik.touched.phoneNumber) ? <div className="invalid-feedback mb-3" style={{ animation: `${(formik.errors.phoneNumber && formik.touched.phoneNumber) ? "fadeIn" : "fadeOut"} 1s` }}>
                            {formik.errors.phoneNumber}
                        </div> : null}
                    </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                    <fieldset>
                        <input  {...formik.getFieldProps('email')} type="email" id="email" placeholder="Your Email *" required className={getFormClass('email')} />
                        {(formik.errors.email && formik.touched.email) ? <div className="invalid-feedback mb-3" style={{ animation: `${(formik.errors.email && formik.touched.email) ? "fadeIn" : "fadeOut"} 1s` }}>
                            {formik.errors.email}
                        </div> : null}
                    </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                    <fieldset>
                        <input {...formik.getFieldProps('subject')} type="text" id="subject" placeholder="Subject *" required className={getFormClass('subject')} />
                        {(formik.errors.subject && formik.touched.subject) ? <div className="invalid-feedback mb-3" style={{ animation: `${(formik.errors.subject && formik.touched.subject) ? "fadeIn" : "fadeOut"} 1s` }}>
                            {formik.errors.subject}
                        </div> : null}
                    </fieldset>
                </div>
                <div className="col-lg-12">
                    <fieldset>
                        <textarea {...formik.getFieldProps('message')} rows="6" id="message" placeholder="Message *" required className={getFormClass('message')} ></textarea>
                        {(formik.errors.message && formik.touched.message) ? <div className="invalid-feedback mb-3" style={{ animation: `${(formik.errors.message && formik.touched.message) ? "fadeIn" : "fadeOut"} 1s` }}>
                            {formik.errors.message}
                        </div> : null}
                    </fieldset>
                </div>
                <Fade show={emailFailed}>
                    <div className="alert alert-danger mb-4 ml-3" role="alert">
                        Email failed to send. Please try again or reach me at my phone #.
                        </div>
                </Fade>
                <Fade show={emailSent}>
                    <div className="alert alert-success mb-4 ml-3" role="alert">
                        Email sent successfully, I will respond as soon as possible!
                        </div>
                </Fade>


                <div className="col-lg-12">
                    <fieldset>
                        <button type="submit" id="form-submit" className="main-button-icon" disabled={disabled ? true : false}>Send Message Now <i className="fa fa-arrow-right" ></i></button>
                    </fieldset>
                </div>
            </div>

        </form>
    )
}

export default ContactForm