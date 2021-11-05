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

    //State that defines which media has to be displayed : 
    const [mediaToShow, setMediaToShow] = useState('');

    //FUNCTION : DISPLAY THE IMAGE THAT WAS CLICKED
    const showImage = (src) => {
        //set imageToShow to be the one that's been clicked on    
        setMediaToShow(src);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    //FUNCTION : CLOSE THE LIGHBOX :
    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    //FUNCTION : SHOW THE NEXT MEDIA :
    const showNext = (mediaSrc) => {
        //We put all the medias of the gallery in an array, to get the one that is currently displayed, and set the next media to be displayed.
        let currentMedias = document.querySelectorAll('.gallery-media');
        let arrayOfMedias = Array.from(currentMedias);
        let mediaDisplayed;
        let nextMedia;
        let newSrc;
        //We find the media that is currently displayed
        arrayOfMedias.map((media)=> {
            console.log(media.nodeName);
            //CHECK IN THE IMAGES :
            if(media && media.nodeName == 'IMG' && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                //  As the id of a media equals its index in the array, 
                //  we turn it into an integer and increment it to get the index of the next media
                let currentId = parseInt(mediaDisplayed.id);
                let nextId = currentId+1;
                let idToString = nextId.toString();
                nextMedia = document.getElementById(idToString);
                //If there is no more media to display, we close the lightbox.
                if(nextMedia === null) {
                    hideLightBox()
                } 
                //If next media is an image, we set its source to display it.
                else if (nextMedia.nodeName == "IMG") {
                    newSrc = nextMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                } 
                //If next media is a video, we set
                else if (nextMedia.nodeName == "VIDEO") {
                    let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                    setMediaToShow(videoSrc);
                }
            }
            //CHECK IN THE VIDEOS 
            if(media && media.nodeName == 'VIDEO') {
                let videoSrc = document.querySelector(".source").src;
                if(videoSrc && videoSrc == mediaSrc) {
                    mediaDisplayed = media;
                    //As the id of a media equals its index in the array, 
                    //we turn it into an integer and increment it to get the index of the next media
                    let currentId = parseInt(mediaDisplayed.id);
                    let nextId = currentId+1;
                    let idToString = nextId.toString();
                    nextMedia = document.getElementById(idToString);
                    //If there is no more media to display, we close the lightbox.
                    if(nextMedia === null) {
                        hideLightBox()
                    } 
                    //If next media is an image, we set its source to display it.
                    else if (nextMedia.nodeName == "IMG") {
                        newSrc = nextMedia.src.substr(21);
                        //We define the next media to be displayed
                        setMediaToShow(newSrc);
                    } 
                    //If next media is a video, we set
                    else if (nextMedia.nodeName == "VIDEO") {
                        let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                        setMediaToShow(videoSrc);
                    }
                }
            }
        })
    }

    //FUNCTION : SHOW THE PREVIOUS MEDIA :
    const showPrevious = (mediaSrc) => {
        //We put all the medias of the gallery in an array, to get the one that is currently displayed, and set the next media to be displayed.
        let currentMedias = document.querySelectorAll('.gallery-media');
        let arrayOfMedias = Array.from(currentMedias);
        let mediaDisplayed;
        let nextMedia;
        let newSrc;
        //We find the media that is currently displayed
        arrayOfMedias.map((media)=> {
            //CHECK IN THE IMAGES :
            if(media && media.nodeName == 'IMG' && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                //  As the id of a media equals its index in the array, 
                //  we turn it into an integer and increment it to get the index of the next media
                let currentId = parseInt(mediaDisplayed.id);
                let nextId = currentId-1;
                let idToString = nextId.toString();
                nextMedia = document.getElementById(idToString);
                //If there is no more media to display, we close the lightbox.
                if(currentId === 0) {
                    hideLightBox()
                } 
                //If next media is an image, we set its source to display it.
                else if (nextMedia.nodeName == "IMG") {
                    newSrc = nextMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                } 
                //If next media is a video, we set
                else if (nextMedia.nodeName == "VIDEO") {
                    let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                    setMediaToShow(videoSrc);
                }
            }
            //CHECK IN THE VIDEOS 
            if(media && media.nodeName == 'VIDEO') {
                let videoSrc = document.querySelector(".source").src;
                if(videoSrc && videoSrc == mediaSrc) {
                    mediaDisplayed = media;
                    //As the id of a media equals its index in the array, 
                    //we turn it into an integer and increment it to get the index of the next media
                    let currentId = parseInt(mediaDisplayed.id);
                    let nextId = currentId-1;
                    let idToString = nextId.toString();
                    nextMedia = document.getElementById(idToString);
                    //If there is no more media to display, we close the lightbox.
                    if(currentId === 0) {
                        hideLightBox()
                    } 
                    //If next media is an image, we set its source to display it.
                    else if (nextMedia.nodeName == "IMG") {
                        newSrc = nextMedia.src.substr(21);
                        //We define the next media to be displayed
                        setMediaToShow(newSrc);
                    } 
                    //If next media is a video, we set
                    else if (nextMedia.nodeName == "VIDEO") {
                        let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                        setMediaToShow(videoSrc);
                    }
                }
            }
        })
    }

    return(
        <>
            {/* GALLERY OF MEDIAS */}
            <div className="gallery">
                {   
                    medias.map((media, index)=> {
                        /* If the media has an image, we display it with an <img/> element */
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
                        /* If the media has a video instead of an image, we display it with a <video> element */
                        } else if(media.video) {
                            return (
                                <div key={index} className="media">
                                    <video autoPlay type="video" controls height="300" className="gallery-media" id={index} onClick={() => {
                                            showImage(process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video);
                                        }} 
                                    >
                                        <source src={process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video} type="video/mp4" className="source"/>
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </div>
                            )
                        }
                    })
                }     
            </div>

            {/* LIGHTBOX */}
            { lightboxDisplay &&
                <div id="lightbox" onClick={hideLightBox}>

                    {/* Cross button to close the lightbox */}
                    <svg className="cross-icon" onClick={hideLightBox} width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#ae2424"/>
                    </svg>

                    {/* Left arrow button to display the previous media */}
                    <button className="previous" onClick={(e) => {
                                                    e.stopPropagation();
                                                    showPrevious(mediaToShow);
                                                 }} 
                    >
                        <svg width="25" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#ae2424"/>
                        </svg>
                    </button>

                    {/* Media that is displayed in the lightbox */}
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

                    {/* Right arrow button to display the next media */}
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