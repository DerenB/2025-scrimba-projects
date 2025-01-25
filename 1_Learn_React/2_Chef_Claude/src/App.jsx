import { useState } from 'react'

import '../css/App.css';

import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App
