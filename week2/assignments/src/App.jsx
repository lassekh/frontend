import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import ListDemo from './ListDemo'
import Timer from './TimerForm'

function App() {

  return (
    <>
      <Counter initialValue={340} inValue={5} deValue={10} />
      <ListDemo />
      <Timer />
    </>
  )
}

export default App
