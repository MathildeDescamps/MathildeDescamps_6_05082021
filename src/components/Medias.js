import { indexOf } from "lodash";
import { useState } from "react";

function Medias(props) {

    let medias = props.medias;
    let mediaFolder = props.name.split(" ")[0];
    let currentIndex; 
    let mediaType;
    let videoType;

    //State that defines whether the lightbox is displayed or not :
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    //State that defines which image has to be displayed : 
    const [mediaToShow, setMediaToShow] = useState('');

    //DISPLAY THE IMAGE THAT WAS CLICKED
    const showImage = (src) => {
        //set imageToShow to be the one that's been clicked on    
        setMediaToShow(src);
        mediaType = src.slice(src.length - 4);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    //CLOSE THE LIGHBOX :
    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    //SHOW NEXT MEDIA :
    const showNext = (mediaSrc) => {
        //Variables
        let currentMedia = document.querySelectorAll('.gallery-media');
        let arrayOfMedias = Array.from(currentMedia);
        let mediaDisplayed;
        let nextMedia;
        let newSrc;
        //We find the media that is currently displayed
        arrayOfMedias.map((media)=> {
            console.log(media.nodeName);
            //Find the media that is currently displayed : 
            //If it's an image :
            if(media.nodeName == 'IMG' && media.attributes.src && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                let currentId = parseInt(mediaDisplayed.id);
                let nextId = currentId+1;
                let idToString = nextId.toString();
                nextMedia = document.getElementById(idToString);
                if(nextMedia === null) {
                    hideLightBox()
                } else if (nextMedia.nodeName == "IMG") {
                    newSrc = nextMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                } else if (nextMedia.nodeName == "VIDEO") {
                    let videoSrc = document.querySelector(nextMedia.className + 'source');
                    console.log('next media is a video !', nextMedia);
                    hideLightBox();
                }
            }

            /* if(media.attributes.src && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                let currentId = parseInt(mediaDisplayed.id);
                let nextId = currentId+1;
                let idToString = nextId.toString();
                nextMedia = document.getElementById(idToString);
                if(nextMedia === null) {
                    hideLightBox()
                } else {
                    newSrc = nextMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                } 
            } */
        })
    }

    //SHOW PREVIOUS MEDIA :
    const showPrevious = (mediaSrc) => {
    //Variables
        let currentMedia = document.querySelectorAll('.gallery-media');
        let videos = document.querySelectorAll('.gallery-media source')
        let arrayOfMedias = Array.from(currentMedia);
        let arrayOfVideos = Array.from(videos);
        let mediaDisplayed;
        let previousMedia;
        let newSrc;
        //We find the media that is currently displayed
        arrayOfMedias.map((media)=> {
            if(media.attributes.src && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                let currentId = parseInt(mediaDisplayed.id);
                let previousId = currentId-1;
                //If the displayed image is the first one, we close the modal on click on the previous button.
                if(currentId === 0) {
                    hideLightBox();
                }
                else {
                    let idToString = previousId.toString();
                    previousMedia = document.getElementById(idToString);
                    newSrc = previousMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                }
            }
        })
    }

    return(
        <>
            <div className="gallery">
                {   
                    medias.map((media, index)=> {
                        if(media.image) {
                            
                            return (
                                <div key={index} className="media">
                                    <img src={process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.image} alt={media.image} className="gallery-media" id={index}
                                        onClick={() => {
                                            showImage(process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.image);
                                            currentIndex = index;
                                        }} 
                                    />
                                </div>
                            )

                        } else if(media.video) {

                            return (
                                <div key={index} className="media">
                                    <video autoPlay type="video" controls height="300" className="gallery-media" id={index} onClick={() => {
                                            showImage(process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video);
                                        }} 
                                    >
                                        <source src={process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video} type="video/mp4" />
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </div>
                            )

                        }
                    })
                }     
            </div>
            { lightboxDisplay &&
                <div id="lightbox">
                    <svg className="cross-icon" onClick={hideLightBox} width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#ae2424"/>
                    </svg>

                    <button className="previous" onClick={(e) => {
                                e.stopPropagation();
                                showPrevious(mediaToShow);
                            }} 
                    >
                        <svg width="25" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#ae2424"/>
                        </svg>
                    </button>
                    <div className="media">
                        {console.log('media to show :', mediaToShow)}
                        {mediaToShow.slice(mediaToShow.length -4) === '.mp4' ?
                            <video autoPlay muted controls height="300">
                                <source src={mediaToShow} type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        :
                            <img id="lightbox-img" src={mediaToShow} />
                        }
                </div>
                    <button className="next" onClick={(e) => {
                                e.stopPropagation();
                                showNext(mediaToShow);
                            }} >
                        <svg width="25" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z" fill="#ae2424"/>
                        </svg>
                    </button>
                </div>
            }
        </>
    )
}

export default Medias;