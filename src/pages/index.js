import React from "react"
import { Form, Field, ErrorMessage, Formik } from "formik"

export default function Home() {
  // console.log("env", process.env.SEND_TO_EMAIL)
  return (
    <div>
      <h1>Test sendGrid</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(data, { resetForm }) => {
          data.from = { email: data.email, name: data.name }
          data.rely_to = { email: process.env.SEND_TO_EMAIL, name: "Me" }
          data.content = [{ type: "text/plain", value: data.message }]
          data.personalizations = [
            {
              to: [{ email: "ttngocthao_87@yahoo.com", name: "me" }],
              subject: "Mail from the website",
            },
          ]
          const { content, from, personalizations, rely_to } = data
          const filterData = { content, from, personalizations, rely_to }
          //  console.log(JSON.stringify(data))
          // console.log("filterData", filterData, JSON.stringify(filterData))
          fetch("https://api.sendgrid.com/v3/", {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            },
            body: JSON.stringify(filterData),
          })
            .then(res => {
              console.log(res)
            })
            .catch(error => console.log(error))
          resetForm()
        }}
      >
        <Form>
          <Field name="name" type="text" />
          <Field name="email" type="text" />
          <Field name="message" type="text" as="textarea" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
