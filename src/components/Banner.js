import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

function Banner() {
    return (
        <div className="banner">
            <Link to={'/'}>
                <img src={logo} alt='FishEye Home Page' className='logo' />
            </Link>
        </div>
    )
}

export default Banner;