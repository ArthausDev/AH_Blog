import React from "react"

const testFunction = () => {
  return (
    <div>
      <h1>Test function page</h1>
      <button
        onClick={() => {
          fetch("https://arthausfunctions.azurewebsites.net/api/HttpTrigger1", {
            mode: "no-cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify("hello function from vscode"),
          })
            .then(res => {
              console.log(res)
            })
            .catch(error => console.log(error))
        }}
      >
        click
      </button>
    </div>
  )
}

export default testFunction
