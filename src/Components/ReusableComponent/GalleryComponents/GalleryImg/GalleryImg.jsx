import React, { useEffect, useState } from 'react'
import './GalleryImg.css'
import './LightBox.css'
import "lightbox2/dist/css/lightbox.min.css";
import lightbox from "lightbox2";

function GalleryImg() {
  const [showMore, setShowMore] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  useEffect(() => {
    // Initialize lightbox2
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices': true,
      'fadeDuration': 300,
      'imageFadeDuration': 300,
    });
    
    // Mutation observer to detect Lightbox visibility changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'style') {
          const lightboxImage = document.querySelector('.lightbox');
          if (lightboxImage && lightboxImage.style.display !== 'none') {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = '';
          }
        }
      });
    });

    // Observe changes to the body element
    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['style'],
    });

    // Cleanup: disconnect observer
    return () => observer.disconnect();
  }, []);



  
const toggleShowMore = () => {
  setShowMore(prevState => !prevState);
};

  return (
    <>
    <div className="galleryContainer">
  <div className="GA_details">
    <img src="assets/galleryimg/GA-img.png" alt=""/>
      <div className="GA-row">
        <h1>Gallery</h1>
        <p>Every Picture Tells a Story</p>
      </div>
  </div>
  </div>
  <div className="image-gallery">
        <a href="assets/galleryimg/G-img1.jpg" data-lightbox="mygallery" data-title="My Image 1">
          <img src="assets/galleryimg/G-img1.jpg" alt="Gallery Image 1"/>
        </a>
        <a href="assets/galleryimg/G-img2.jpg" data-lightbox="mygallery" data-title="My Image 2">
          <img src="assets/galleryimg/G-img2.jpg" alt="Gallery Image 2"/>
        </a>
        <a href="assets/galleryimg/G-img3.jpg" data-lightbox="mygallery" data-title="My Image 3">
          <img src="assets/galleryimg/G-img3.jpg" alt="Gallery Image 3"/>
        </a>
        <a href="assets/galleryimg/G-img4.jpg" data-lightbox="mygallery" data-title="My Image 4">
          <img src="assets/galleryimg/G-img4.jpg" alt="Gallery Image 4"/>
        </a>
        <a href="assets/galleryimg/G-img5.jpg" data-lightbox="mygallery" data-title="My Image 5">
          <img src="assets/galleryimg/G-img5.jpg" alt="Gallery Image 5"/>
        </a>
        <a href="assets/galleryimg/G-img6.jpg" data-lightbox="mygallery" data-title="My Image 6">
          <img src="assets/galleryimg/G-img6.jpg" alt="Gallery Image 6"/>
        </a>
        <a href="assets/galleryimg/G-img7.jpg" data-lightbox="mygallery" data-title="My Image 7">
          <img src="assets/galleryimg/G-img7.jpg" alt="Gallery Image 7"/>
        </a>
        <a href="assets/galleryimg/G-img8.jpg" data-lightbox="mygallery" data-title="My Image 8">
          <img src="assets/galleryimg/G-img8.jpg" alt="Gallery Image 8"/>
        </a>
        <a href="assets/galleryimg/G-img9.jpg" data-lightbox="mygallery" data-title="My Image 9">
          <img src="assets/galleryimg/G-img9.jpg" alt="Gallery Image 9"/>
        </a>

        {/* // this image become show when user is click explore more button click time */}

        {showMore && (

          <>
        <a href="assets/galleryimg/galleryimg.jpg" data-lightbox="mygallery" data-title="My Image 1">
          <img src="assets/galleryimg/galleryimg.jpg" alt="Gallery Image 1"/>
        </a>
        <a href="assets/galleryimg/galleryimg2.jpg" data-lightbox="mygallery" data-title="My Image 2">
          <img src="assets/galleryimg/galleryimg2.jpg" alt="Gallery Image 2"/>
        </a>
        <a href="assets/galleryimg/galleryimg3.jpg" data-lightbox="mygallery" data-title="My Image 3">
          <img src="assets/galleryimg/galleryimg3.jpg" alt="Gallery Image 3"/>
        </a>
        <a href="assets/galleryimg/galleryimg4.jpg" data-lightbox="mygallery" data-title="My Image 4">
          <img src="assets/galleryimg/galleryimg4.jpg" alt="Gallery Image 4"/>
        </a>
        <a href="assets/galleryimg/galleryimg5.jpg" data-lightbox="mygallery" data-title="My Image 5">
          <img src="assets/galleryimg/galleryimg5.jpg" alt="Gallery Image 5"/>
        </a>
        <a href="assets/galleryimg/galleryimg6.jpg" data-lightbox="mygallery" data-title="My Image 6">
          <img src="assets/galleryimg/galleryimg6.jpg" alt="Gallery Image 6"/>
        </a>
        <a href="assets/galleryimg/galleryimg7.jpg" data-lightbox="mygallery" data-title="My Image 7">
          <img src="assets/galleryimg/galleryimg7.jpg" alt="Gallery Image 7"/>
        </a>
        <a href="assets/galleryimg/galleryimg8.jpg" data-lightbox="mygallery" data-title="My Image 8">
          <img src="assets/galleryimg/galleryimg8.jpg" alt="Gallery Image 8"/>
        </a>
        <a href="assets/galleryimg/galleryimg9.jpg" data-lightbox="mygallery" data-title="My Image 9">
          <img src="assets/galleryimg/galleryimg9.jpg" alt="Gallery Image 9"/>
        </a>
        </>

)}

      </div>
      <div className="col-md-12 text-center">
                  {!showMore && (
                                <button className="explore-btn" onClick={toggleShowMore}>
                                    Explore More
                                </button>
                     )}

                     </div>
    </>
  )
}

export default GalleryImg