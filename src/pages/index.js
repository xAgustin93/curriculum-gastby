import React from "react"
import { Button } from "react-bootstrap"
import "./index.scss"

export default function Index() {
  return (
    <div>
      <h1 className="title">Hi people</h1>
      <Button variant="primary">Click Me</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
}
