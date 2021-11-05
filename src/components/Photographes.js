import React from "react";
import {Link} from "react-router-dom";

function Photographes(props) {
    return (
            <main>
                <h1>Nos Photographes</h1>
                <section id="photographs">
                    {props.photographers.map((photograph, index) => {
                        return (
                            <div className="photograph" key={index} >
                                <Link to={'/profile/'+photograph.id} >
                                    <div className="photograph-container">
                                        <img src={props.url + 'photographers-profile-pics/' + photograph.portrait } alt={photograph.name} />
                                        <h2 className="name">{photograph.name}</h2>
                                        <p className="location">{photograph.city + ', ' + photograph.country}</p>
                                        <p className="tagline">{photograph.tagline}</p>
                                        <p className="price">{photograph.price}€ / jour</p>
                                        <ul className="taglist">
                                            {photograph.tags.map((tag, i) => {
                                                return (  
                                                    <li key={i}>#{tag}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Link>
                            </div>
                        )  
                    })}
                </section>
            </main>
    )
}

export default Photographes;