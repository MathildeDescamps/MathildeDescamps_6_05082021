import { useState } from "react";

function Medias(props) {

    let medias = props.medias;
    let mediaFolder = props.name.split(" ")[0];
    let currentIndex;
    let totalLikes = 0;
    medias.forEach(media => {
            console.log(media.likes);
    });

    //State that defines whether the lightbox is displayed or not :
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);

    //State that defines which media has to be displayed : 
    const [mediaToShow, setMediaToShow] = useState('');

    const [mediaTitle, setMediaTitle] = useState('');

    /* const [mediaIsLiked, setMediaIsLiked] = useState(false); */

    //FUNCTION : DISPLAY THE IMAGE THAT WAS CLICKED
    const showImage = (src, title) => {
        //set imageToShow to be the one that's been clicked on    
        setMediaToShow(src);
        setMediaTitle(title);
        //set lightbox visibility to true
        setLightBoxDisplay(true);
    };

    //FUNCTION : CLOSE THE LIGHTBOX :
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
            //CHECK IN THE IMAGES :
            if(media.nodeName == 'IMG' && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                //  As the id of a media equals its index in the array, 
                //  we turn it into an integer and increment it to get the index of the next media
                let currentId = parseInt(mediaDisplayed.id);
                let nextId = currentId+1;
                let idToString = nextId.toString();
                nextMedia = document.getElementById(idToString);
                //If there is no more media to display, we close the lightbox.
                if(!nextMedia) {
                    hideLightBox()
                } 
                //If next media is an image, we set its source to display it.
                else if (nextMedia.nodeName == "IMG") {
                    newSrc = nextMedia.src.substr(21);
                    //We define the next media to be displayed
                    setMediaToShow(newSrc);
                    setMediaTitle(nextMedia.alt);
                } 
                //If next media is a video, we set
                else if (nextMedia.nodeName == "VIDEO") {
                    let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                    setMediaToShow(videoSrc);
                    setMediaTitle(nextMedia.alt);
                }
            }
            //CHECK IN THE VIDEOS 
            else if(media.nodeName == 'VIDEO') {
                //If currently displayed media is a video : 
                let videoSrc = document.querySelector(".source").src.substr(21);
                if(videoSrc && (videoSrc == mediaSrc.substr(21) || videoSrc == mediaSrc)) {
                    mediaDisplayed = media;
                    //As the id of a media equals its index in the array, 
                    //we turn it into an integer and increment it to get the index of the next media
                    let currentId = parseInt(mediaDisplayed.id);
                    let nextId = currentId+1;
                    let idToString = nextId.toString();
                    nextMedia = document.getElementById(idToString);
                    //If there is no more media to display, we close the lightbox.
                    if(!nextMedia) {
                        hideLightBox();
                    } 
                    //If next media is an image, we set its source to display it.
                    else if (nextMedia.nodeName == "IMG") {
                        newSrc = nextMedia.src.substr(21);
                        //We define the next media to be displayed
                        setMediaToShow(newSrc);
                        setMediaTitle(nextMedia.alt);
                    } 
                    //If next media is a video, we set
                    else if (nextMedia.nodeName == "VIDEO") {
                        let videoSrc = document.querySelector("[id='"+nextMedia.id+"'] .source").src;
                        setMediaToShow(videoSrc);
                        setMediaTitle(nextMedia.alt);
                    }
                }
            }
        })
    }
//
    //FUNCTION : SHOW THE PREVIOUS MEDIA :
    const showPrevious = (mediaSrc) => {
        //We put all the medias of the gallery in an array, to get the one that is currently displayed, and set the previous media to be displayed.
        let currentMedias = document.querySelectorAll('.gallery-media');
        let arrayOfMedias = Array.from(currentMedias);
        let mediaDisplayed;
        let prevMedia;
        let newSrc;
        //We find the media that is currently displayed
        arrayOfMedias.map((media)=> {
            //CHECK IN THE IMAGES :
            if(media && media.nodeName == 'IMG' && media.attributes.src.nodeValue == mediaSrc) {
                mediaDisplayed = media;
                //  As the id of a media equals its index in the array, 
                //  we turn it into an integer and increment it to get the index of the previous media
                let currentId = parseInt(mediaDisplayed.id);
                let prevId = currentId-1;
                let idToString = prevId.toString();
                prevMedia = document.getElementById(idToString);
                //If there is no more media to display, we close the lightbox.
                if(currentId === 0) {
                    hideLightBox();
                } 
                //If previous media is an image, we set its source to display it.
                else if (prevMedia.nodeName == "IMG") {
                    newSrc = prevMedia.src.substr(21);
                    //We define the previous media to be displayed
                    setMediaToShow(newSrc);
                    setMediaTitle(prevMedia.alt);
                } 
                //If previous media is a video, we set
                else if (prevMedia.nodeName == "VIDEO") {
                    let videoSrc = document.querySelector("[id='"+prevMedia.id+"'] .source").src;
                    setMediaToShow(videoSrc);
                    setMediaTitle(prevMedia.alt);
                }
            }
            //CHECK IN THE VIDEOS 
            if(media && media.nodeName == 'VIDEO') {
                let videoSrc = document.querySelector(".source").src;
                if(videoSrc && (videoSrc == mediaSrc.substr(21) || videoSrc == mediaSrc || videoSrc.substr(21) == mediaSrc)) {
                    mediaDisplayed = media;
                    //As the id of a media equals its index in the array, 
                    //we turn it into an integer and increment it to get the index of the previous media
                    let currentId = parseInt(mediaDisplayed.id);
                    let prevId = currentId-1;
                    let idToString = prevId.toString();
                    prevMedia = document.getElementById(idToString);
                    //If there is no more media to display, we close the lightbox.
                    if(currentId === 0) {
                        hideLightBox();
                    } 
                    //If previous media is an image, we set its source to display it.
                    else if (prevMedia.nodeName == "IMG") {
                        newSrc = prevMedia.src.substr(21);
                        //We define the previous media to be displayed
                        setMediaToShow(newSrc);
                        setMediaTitle(prevMedia.alt);
                    } 
                    //If prev media is a video, we set
                    else if (prevMedia.nodeName == "VIDEO") {
                        let videoSrc = document.querySelector("[id='"+prevMedia.id+"'] .source").src;
                        setMediaToShow(videoSrc);
                        setMediaTitle(prevMedia.alt);
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

                        let mediaIsLiked = false;

                        /* If the media is an image, we display it with an <img/> element */
                        if(media.image) {
                            return (
                                <div key={index} className="media">
                                    <img    src={process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.image} 
                                            tabIndex="0"
                                            alt={media.altText} 
                                            className="gallery-media" 
                                            id={index}
                                            onClick={() => {
                                                showImage(process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.image, media.title);
                                                currentIndex = index;
                                            }}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                  document.activeElement.click();
                                                }
                                            }
            
                                            }
                                    />
                                    <div className="media-infos">
                                        <p>{media.title}</p>
                                        <div className="likes">
                                            <p aria-label="likes">{media.likes}</p>
                                                <svg 
                                                    className="filled-heart"
                                                    id={media.id}
                                                    aria-label="like button, liked" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    height="18px" 
                                                    viewBox="0 0 24 24" 
                                                    width="18px" 
                                                    fill="#901C1C"
                                                    onClick={() => {
                                                        if (!mediaIsLiked) {
                                                            console.log('+ 1 like');
                                                            mediaIsLiked = true;
                                                            totalLikes = totalLikes++;
                                                        }
                                                    }}
                                            >
                                                <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        /* If the media is a video instead of an image, we display it with a <video> element */
                        } else if(media.video) {
                            return (
                                <div key={index} className="media">
                                    <video  autoPlay 
                                            tabIndex="0"
                                            type="video" 
                                            controls 
                                            height="300"
                                            alt={media.altText}
                                            className="gallery-media" 
                                            id={index} 
                                            onClick={() => {
                                                showImage(process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video, media.title);
                                            }} 
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                  document.activeElement.click();
                                                }
                                            }}
                                    >
                                        <source src={process.env.PUBLIC_URL + '/' + mediaFolder + '/' + media.video} type="video/mp4" className="source"/>
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                    <div className="media-infos">
                                        <p>{media.title}</p>
                                        <div className="likes" aria-label="likes">
                                            <p>{media.likes}</p>
                                                <svg 
                                                    className="filled-heart"  
                                                    id={media.id}
                                                    aria-label="like button, liked" 
                                                    xmlns="http://www.w3.org/2000/svg" 
                                                    height="18px" 
                                                    viewBox="0 0 24 24" 
                                                    width="18px" 
                                                    fill="#901C1C"
                                                    onClick={() => {
                                                        if (!mediaIsLiked) {
                                                            console.log('+ 1 like');
                                                            mediaIsLiked = true;
                                                            totalLikes =  totalLikes+=1;
                                                        }
                                                    }}
                                                >
                                                    <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return true;
                    })
                }     
            </div>


            {/* LIGHTBOX */}
            { lightboxDisplay &&
                <div id="lightbox" aria-label="Image closeup view" onClick={hideLightBox}>

                    {/* Cross button to close the lightbox */}
                    <svg className="cross-icon" onClick={hideLightBox} width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" tabIndex="0" aria-label="Close dialog" onKeyPress={(event) => {if (event.key === 'Enter') {hideLightBox()} }}  >
                        <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="#901C1C"/>
                    </svg>

                    {/* Left arrow button to display the previous media */}
                    <button className="previous" tabIndex="0" aria-label="Previous image" onClick={(e) => {
                                                                                                        e.stopPropagation();
                                                                                                        showPrevious(mediaToShow);
                                                                                                    }} 
                    >
                        <svg width="25" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z" fill="#901C1C"/>
                        </svg>
                    </button>

                    {/* Media that is displayed in the lightbox */}
                    <div className="media">
                        {mediaToShow.slice(mediaToShow.length -4) === '.mp4' ?
                            <video autoPlay muted controls height="300">
                                <source src={mediaToShow} type="video/mp4" className="source"/>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        :
                            <img id="lightbox-img" src={mediaToShow} alt={mediaTitle}/>
                        }
                        <p>{mediaTitle}</p>
                    </div>

                    {/* Right arrow button to display the next media */}
                    <button className="next" tabIndex="0" aria-label="Next image" onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        showNext(mediaToShow);
                                                                    }}
                     >
                        <svg width="25" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.360108 5.64L18.6801 24L0.360107 42.36L6.00011 48L30.0001 24L6.00011 3.88195e-06L0.360108 5.64Z" fill="#901C1C"/>
                        </svg>
                    </button>

                </div>
            }
        </>
    )
}

export default Medias;