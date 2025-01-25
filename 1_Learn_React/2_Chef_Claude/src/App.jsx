import { useState } from 'react'

import '../css/App.css';

import Header from '../components/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p>Hello cheese and crackers</p>
    </>
  )
}

export default App
