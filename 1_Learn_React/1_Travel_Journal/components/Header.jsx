import React from 'react';

import '../styles/Header.css';

function Header() {
    return (
        <header id='header'>
            <img id='globe' src="../src/assets/globe.png" alt='globe' />
            <div id='headerTitle'>My Travel Journal</div>
        </header>
    )
}

export default Header;
