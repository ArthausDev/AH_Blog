import React, { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window &&
      window.location.replace(
        "https://www.arthaus.co.uk/insights/insights.html"
      )
  }, [])
  return (
    <div>
      <h1>Redirect to Insights page...</h1>
    </div>
  )
}
