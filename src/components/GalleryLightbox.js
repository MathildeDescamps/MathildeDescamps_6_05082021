import Lightbox from 'react-lightbox-component';

function GalleryLightbox(props) {
    return(
        <div>
            <Lightbox images={props.medias}/>
        </div>
    )
};

export default GalleryLightbox;