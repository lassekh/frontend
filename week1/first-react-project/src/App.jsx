import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import upper, { text1, text2, text3} from './file1'
import obj, {males, females} from './file2'
import { MultiWelcome } from './file3'
import JokeComponent from './file4'

function App() {
  const [count, setCount] = useState(0)
  const person = {obj}
  const { firstName, email } = obj

  const persons = [...males, ...females]
  console.log(persons)

  const personV2 = {...person, friends: persons, phone: 12345678}
  console.log(personV2)


  return (
    <>
    <h2>Ex 1</h2>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    <p>{upper("text uppercased")}</p>
    <h2>Ex 2</h2>
    <p>{firstName}, {email}</p>
    <h2>Ex 3</h2>
    <MultiWelcome/>
    {JokeComponent()}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
