import {aboutSection} from "./js/about.module.js";
import { navbar } from "./js/navbar.module.js";
document.addEventListener("DOMContentLoaded", () => {
    // navigation bar ...........................................................//
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
        navbar();  
    });  
    aboutSection();
    // header video play .........................................................//
    (function(){
        let videoHeader=document.querySelector(".video-header");
        let videoIcon=document.querySelector(".video-play i");
        let closeVideo=document.getElementById("close-video");
        videoIcon.addEventListener("click",()=>{
          videoHeader.classList.replace("d-none","d-flex");
        });
        closeVideo.addEventListener("click",()=>{
          videoHeader.classList.replace("d-flex","d-none");
        });
    })();
  });
  function setupObserver() {
    const sectionView = document.querySelectorAll(".show-section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
  
        if (ratio === 1) {
          entry.target.classList.add('show');
        } else if (ratio < 0.5) {
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100) // [0, 0.01, ..., 1]
    });
  
    sectionView.forEach(section => {
      observer.observe(section);
    });
  }
  
  
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


