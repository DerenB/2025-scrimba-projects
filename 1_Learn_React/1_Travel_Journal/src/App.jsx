import { useState } from 'react';

import '../styles/App.css';

import Header from  '../components/Header.jsx';
import Entry from  '../components/Entry.jsx';

import CampImage from "./assets/camping.jpg";

function App() {

  return (
    <>
      <Header />

      <main className='container'>

        <Entry 
          image = {CampImage}
          mapUrl = "https://maps.app.goo.gl/kH8pH5BgiSu4vmU59"
          city = "Traverse City"
          title = "Campground"
          dates = "24 Aug, 2024 - 26 Aug, 2024"
          text = {
            "Went camping in Traverse City, Michigan. Stayed two nights, slept in " + 
            "the truck the first night and in a tent the second night. The campground " + 
            "is called Keith J. Charters Traverse City State Park. Established in 1920, " + 
            "the part is named after Keith J. Charters, a local conservationist and hunter."
          }
        />

      </main>
      
    </>
    
  )
}

export default App
