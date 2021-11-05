import Intro from './Intro';
import Gallery from './Gallery';

function Photograph(props) {

    let idUrl = window.location.pathname.slice(9);
    let photographers = props.photographers;
    let medias = props.medias;
    let profile;
    let profileId;
    let i;

    photographers.map((photograph, index) => {
        if(photograph.id.toString() == idUrl) {
            profile = photograph;
            i = index;
            profileId = profile.id;
        }
    })
    return (
        <div className="profilePage">
            <Intro url={props.url} profile={profile} index={i}/>
            <Gallery profileId={profile.id} profile={profile} medias={medias} />
        </div>
    );
}

export default Photograph;