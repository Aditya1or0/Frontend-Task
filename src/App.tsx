import React from 'react'
import { Button } from './components/ui/button'
import FirstUI from "../components/firstUI"

const App : React.FC= () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1>hello</h1>
    <Button>Click me</Button>
    <FirstUI/>
  </div>
  )
}

export default App
