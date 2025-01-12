import { useState } from 'react';

import '../styles/App.css';

import Header from  '../components/Header.jsx';
import Entry from  '../components/Entry.jsx';

function App() {

  return (
    <>
      <Header />
      <main className='container'>
        <Entry />
      </main>
      
    </>
    
  )
}

export default App
