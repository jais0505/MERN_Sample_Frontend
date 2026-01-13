import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  
  const [greeting, setGreeting] = useState("")
  

  const BACKEND_URL = "https://mern-sample-backend.vercel.app/"

  const fetchGreeting = async () => {
    try {
      const response = await axios.get(BACKEND_URL)
      setGreeting(response.data.message)
    } catch (error) {
      console.error("Error fetching data:", error)
      setGreeting("Failed to connect to backend")
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hi user, from frontend</h1>
      
      <button onClick={fetchGreeting} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Click Me
      </button>

      {greeting && (
        <h2 style={{ color: 'green', marginTop: '20px' }}>
          {greeting}
        </h2>
      )}
    </div>
  )
}

export default App