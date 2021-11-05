import { useState } from "react";
import * as _ from "lodash";
import Medias from "./Medias";
import Sticker from './Sticker';

function Gallery(props) {

    let medias = props.medias;
    //Le filtre est sur 'popularité' par défaut :
    const [filter, setFilter] = useState('likes');
    //On ordonne les médias du plus populaire au moins populaire :
    const [items, setItems] = useState(_.orderBy([...medias.filter(media => media.photographerId == props.profileId)], ['likes'], 'desc'));
    
    return(
        <>
            <div className="gallery-wrapper">
                <div className="filter">
                    <p>Trier par</p> 
                    <select 
                        id="filter" 
                        value={filter} 
                        //Quand le filtre change, on met à jour l'odre des medias:
                        onChange={e => {
                            setFilter(e.target.value);
                            setItems(_.orderBy([...items], [e.target.value], filter === 'title' ? 'asc' : 'desc'));
                        }}
                    >
                        <option value='likes' defaultValue>Popularité</option>
                        <option value='date'>Date</option>
                        <option value='title'>Titre</option>
                    </select>
                </div>
            <Medias profile={props.profile} name={props.profile.name} medias={items} />
            </div>
            <Sticker income={props.profile.price} medias={items}/>
        </>
    )
}

export default Gallery;