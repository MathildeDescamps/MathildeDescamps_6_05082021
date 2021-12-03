function Intro(props) {
    return (
        <>
        <div id="form-wrapper" aria-label={"Contact me "+ props.profile.name }>
            <form onSubmit={(e) => e.preventDefault()} >    
                <div className="form-header">
                    <h2>Contactez-moi<br/>{props.profile.name}</h2>
                    <button aria-label="Close Contact form" onClick={() => {
                                let modal = document.getElementById("form-wrapper");
                                modal.style.display = "none";
                    }}>
                        x
                    </button>
                </div>
                <label>Prénom</label>
                <input name="firstname" aria-label="First name" type="text" />   
                <label>Nom</label>
                <input name="lastname" aria-label="Last name" type="text" />   
                <label>Email</label>
                <input name="email" aria-label="Email" type="email" />
                <label>Votre message</label>
                <textarea name="message" aria-label="Your message"></textarea>
                <input type="submit" aria-label="Send" value="Envoyer"/>
            </form>
        </div>
        <div className="intro">
            <div className="left-part">
                <h1>{props.profile.name}</h1>
                <p className="location">{props.profile.city}, {props.profile.country}</p>
                <p className="tagline">{props.profile.tagline}</p>
                <ul className="taglist">
                    {props.profile.tags.map((tag, i) => {
                        return (  
                            <li aria-label={tag} key={i}>#{tag}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="center-part">
                <button aria-label="Contact me" onClick={() => {
                            let modal = document.getElementById("form-wrapper");
                            modal.style.display = "flex";
                }}>
                    Contactez-moi
                </button>
            </div>
            <div className="right-part">
                <img src={`${process.env.PUBLIC_URL}/photographers-profile-pics/${props.profile.portrait}`} alt={props.profile.name} />
            </div>
        </div>
        </>
    )
}

export default Intro; 