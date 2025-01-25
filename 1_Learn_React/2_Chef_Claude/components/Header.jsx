import chefLogo from '../src/assets/chef-claude-icon.png';

import '../css/Header.css';

export default function Header() {
    return (
        <>
            <header>
                <img src={chefLogo} alt="Chef Claude" />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}