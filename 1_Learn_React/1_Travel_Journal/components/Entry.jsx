import React from 'react';

import '../styles/Entry.css';

import Marker from '../src/assets/marker.png';

function Entry(props) {
    return (
        <article className='journalEntry'>

            <div className='mainImageContainer'>
                <img className='mainImage' src={props.image} alt={props.title} />
            </div>

            <div className='infoContainer'>

                <div className='infoHeader'>
                    <img className='marker' src={Marker} alt="map marker" />

                    <span className="country">{props.city}</span>

                    <a target='_blank' href='https://maps.app.goo.gl/kH8pH5BgiSu4vmU59'>
                        View on Google Maps
                    </a>
                </div>

                <h2 className="entryTitle">{props.title}</h2>

                <p className='tripDates'>{props.dates}</p>

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
