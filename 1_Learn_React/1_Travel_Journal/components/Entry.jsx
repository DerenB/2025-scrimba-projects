import React from 'react';

import '../styles/Entry.css';

function Entry() {
    return (
        <article className='journalEntry'>

            <div className='mainImageContainer'>
                <img className='mainImage' src='../src/assets/camping.jpg' />
            </div>

            <div className='infoContainer'>

                <div className='infoHeader'>
                    <img className='marker' src='../src/assets/marker.png' alt="map marker" />

                    <span className="country">Traverse City</span>

                    <a target='_blank' href='https://maps.app.goo.gl/kH8pH5BgiSu4vmU59'>
                        View on Google Maps
                    </a>
                </div>

                <h2 className="entryTitle">Campground</h2>

                <p className='tripDates'>24 Aug, 2024 - 26 Aug, 2024</p>

                <p className="entryText">
                    Went camping in Traverse City, Michigan. Stayed two nights, slept in 
                    the truck the first night and in a tent the second night. The campground
                    is called Keith J. Charters Traverse City State Park. Established in 1920,
                    the part is named after Keith J. Charters, a local conservationist and hunter.
                </p>

            </div>
            
        </article>
    )
}

export default Entry;
