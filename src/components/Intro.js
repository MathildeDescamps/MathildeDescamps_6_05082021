function Intro(props) {
    return (
        <>
        <div id="form-wrapper">
            <form onSubmit={(e) => e.preventDefault()} >    
                <div className="form-header">
                    <h3>Contactez-moi<br/>{props.profile.name}</h3>
                    <button onClick={() => {
                                let modal = document.getElementById("form-wrapper");
                                modal.style.display = "none";
                    }}>
                        x
                    </button>
                </div>
                <label>Prénom</label>
                <input name="firstname" type="text" />   
                <label>Nom</label>
                <input name="lastname" type="text" />   
                <label>Email</label>
                <input name="email" type="email" />
                <label>Votre message</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Envoyer"/>
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
                            <li key={i}>#{tag}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="center-part">
                <button onClick={() => {
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