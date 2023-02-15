import { useState } from "react"
import { SimpleNavbar } from "./components/SimpleNavbar"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleNavbar />
      <div className="App m-4">
        <article className="prose">
          <h1 className="">React + Vite</h1>
          <p>
            <b>an intro</b> <br />
            is hard to come by in this sad world. tailwind has decided that I'm not worthy -- nay -- that I am simply
            worthless.
          </p>
        </article>
        <div className="bg-slate-100">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
      </div>
    </>
  )
}

export default App
