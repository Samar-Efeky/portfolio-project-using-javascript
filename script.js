import {aboutSection} from "./js/about.module.js";
import { navbar } from "./js/navbar.module.js";
import { setupObserver } from "./js/observer.module.js";
import { testimonial } from "./js/testimonial.module.js";
import { workImage } from "./js/work.module.js";
window.addEventListener('load',()=>{
  let loading=document.querySelector(".loading");
  loading.classList.replace("d-flex","d-none");
  document.body.style.overflow = 'auto';
});
document.addEventListener("DOMContentLoaded", () => {
    navbar();
    fetch("work.section.html")
      .then(response => response.text())
      .then(data => {
        document.querySelector(".working").innerHTML = data; 
        setupObserver();
        workImage();
        aboutSection();
    });  
    // header video play .........................................................//
    (function(){
      let videoHeader = document.querySelector(".video-header");
      let videoIcon = document.querySelector(".video-play i");
      let closeVideo = document.getElementById("close-video");
    
      if (videoHeader && videoIcon && closeVideo) {
        videoIcon.addEventListener("click", () => {
          videoHeader.classList.replace("d-none", "d-flex");
        });
        closeVideo.addEventListener("click", () => {
          videoHeader.classList.replace("d-flex", "d-none");
        });
        videoHeader.addEventListener("click",(e)=>{
          if(e.target===videoHeader){
            videoHeader.classList.replace("d-flex", "d-none");
          };
        });
      }
    })();
  
  fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
    let currentYear=new Date().getFullYear();
    document.querySelector(".copy-right-year").innerHTML=currentYear;
    scrollToPageTop();
    setupObserver();
   
});  
function scrollToPageTop(){
  document.querySelector(".scroll-top").addEventListener("click",()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })
}
fetch("business.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("Business").innerHTML = data; 
        setupObserver();
});  
testimonial();
});