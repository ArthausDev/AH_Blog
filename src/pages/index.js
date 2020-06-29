import React, { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window &&
      window.location.replace("https://www.arthaus.co.uk/toolkit/toolkit.html")
  }, [])
  return (
    <div>
      <h1>Redirect to ToolKit page...</h1>
    </div>
  )
}
