import { useState } from 'react';

// Styles
import '../styles/App.css';

// Components
import Header from  '../components/Header.jsx';
import Entry from  '../components/Entry.jsx';

// Data
import data from '../data/TripData.js';

function App() {

  // Create list of Entry components
  const entryElements = data.map((entry) => {
    return (
      <Entry 
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />

      <main className='container'>

        {entryElements}
        
      </main>
      
    </>
    
  )
}

export default App
