import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/logo.png';

const tags = ['portrait', 'art', 'fashion', 'architecture', 'travel', 'sports', 'animals', 'events'];

function Home(props) {

    let photographers = props.photographers;
    const [tagFilter, setTagFilter] = useState('all');
    const [showButton, setShowButton] = useState(false);

    const displayTaggedPhotographers = (tag) => {
        setTagFilter(tag);
    }

    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

    return (
        <>
            {showButton && (
                <div className="backToTop">
                    <button onClick={scrollToTop} className="back-to-top">
                        Passer au contenu
                    </button>
                </div>
            )}
            <header>
                <Link to={'/'} onClick={ () => { setTagFilter('all') } }>
                    <img src={logo} alt='FishEye Home page' className='logo'/>
                </Link>
                <nav>
                    <ul className='nav-tags'>
                        {tags.map((tag, index) => {
                            return  <li key={index} onClick={ () => { displayTaggedPhotographers(tag) } } tabIndex="0" aria-label={tag} >#{tag}</li>
                        })}
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Nos photographes</h1>
                <section id="photographs">
                    {photographers.map((photograph, index) => {
                        if(tagFilter === 'all' || photograph.tags.includes(tagFilter)) {
                            return (
                                <div className="photograph" key={index} >
                                    <div className="photograph-container">
                                        <Link to={'/profile/'+photograph.id} >
                                            <img src={props.url + 'photographers-profile-pics/' + photograph.portrait } alt={photograph.name} />
                                            <h2 className="name">{photograph.name}</h2>
                                        </Link>
                                        <p className="location">{photograph.city + ', ' + photograph.country}</p>
                                        <p className="tagline">{photograph.tagline}</p>
                                        <p className="price">{photograph.price}€ / jour</p>
                                        <ul className="taglist">
                                            {photograph.tags.map((tag, i) => {
                                                return (  
                                                    <li key={i} onClick={ () => { displayTaggedPhotographers(tag) } } tabIndex="0" aria-label={tag}>#{tag}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )  
                        }
                    })}
                </section>
            </main>
        </>
    )
}

export default Home;