import { useState, useEffect } from "react"
import Name from "./components/Name"
import Chat from "./components/Chat"

function App() {
  const [confirmedName, setConfirmedName] = useState(null)
  return (
    <div className="App">
      <h1 className="text-center">Socket Chat</h1>
      {!confirmedName && <Name setConfirmedName={setConfirmedName} />}
      {confirmedName && <Chat name={confirmedName} />}
    </div>
  )
}

export default App
