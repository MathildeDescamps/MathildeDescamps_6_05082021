import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logo} alt='FishEye' className='logo' />
            <nav>
                <ul className='nav-tags'>
                    <li>#Portrait</li>
                    <li>#Art</li>
                    <li>#Fashion</li>
                    <li>#Architecture</li>
                    <li>#Travel</li>  
                    <li>#Sport</li>
                    <li>#Animals</li>
                    <li>#Events</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;