import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from "./contactForm.module.scss"
import Recaptcha from "react-recaptcha"
// import Button from "../Buttons/Button"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactForm() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    console.log("env", process.env)
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])
  return (
    <section className={`clear-float ${styles.background}`}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "Required"
          } else if (values.name.length <= 1) {
            errors.name = "must be at least 2 characters"
          }
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          if (!values.message) {
            errors.message = "Required"
          } else if (values.message.length > 300) {
            errors.message = "must be less than 300 characters"
          }
          return errors
        }}
        onSubmit={(data, { resetForm }) => {
          data.token = token
          // console.log("data", data)
          fetch("https://arthausfunctions.azurewebsites.net/api/HttpTrigger1", {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then(res => {
              // navigate("/thanks/")
              console.log("sent", res)
            })
            .catch(error => alert(error))
        }}
      >
        <Form className={styles.form} name="contact-form">
          <h2 className={styles.title}>Get in touch</h2>
          <h5 className={styles.text}>
            Contact us to find out how we can help you.
          </h5>
          <div className={styles.flexWrap}>
            {" "}
            <div className={`${styles.inputWrap} ${styles.nameInputWrap}`}>
              <label htmlFor="name">Your name</label>
              <Field name="name" type="text" />
              <span className={styles.errorMessage}>
                <ErrorMessage name="name" />
              </span>
            </div>
            <div className={`${styles.inputWrap} ${styles.emailInputWrap}`}>
              <label htmlFor="email">Your email</label>
              <Field name="email" type="text" />
              <span className={styles.errorMessage}>
                <ErrorMessage name="email" />
              </span>
            </div>
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="message">Your message</label>
            <Field name="message" type="text" as="textarea" />
            <span className={styles.errorMessage}>
              <ErrorMessage name="message" />
            </span>
          </div>
          <br />
          <div className={styles.recaptcha}>
            <Recaptcha
              className={styles.recaptcha}
              sitekey="6Lco-KcZAAAAAMQJsq24NqoOceSVSnh_JCFPRSAm"
              render="explicit"
              theme="dark"
              verifyCallback={response => {
                console.log(response)

                fetch(
                  "https://recaptchavalidation20200625124011.azurewebsites.net/api/ValidateReCaptcha",
                  {
                    mode: "no-cors",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ value: response }),
                  }
                )
                  .then(res => {
                    console.log("sent token", res)
                  })
                  .catch(error => alert(error))
                // setToken(response)
                // console.log("do sth with the token, i believe", token)
              }}
              onloadCallback={() => {
                console.log("done loading!")
              }}
            />
          </div>

          <br />
          <div className={styles.inputWrap}>
            {" "}
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  )
}

export default ContactForm
