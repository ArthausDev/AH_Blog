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
          data.from = { email: "think@arthaus.co.uk", name: "Arthaus website" }
          data.rely_to = { email: data.email, name: "Me" }
          data.content = [
            {
              type: "text/plain",
              value: `From ${data.name} - ${data.email} \n Message: ${data.message}`,
            },
          ]
          data.personalizations = [
            {
              to: [{ email: "thao.truong@arthaus.co.uk", name: "me" }],
              subject: "Mail from the website",
            },
          ]
          const { content, from, personalizations } = data
          const filterData = { content, from, personalizations }

          fetch("https://arthausfunctions.azurewebsites.net/send", {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
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
