import {aboutSection} from "./js/about.module.js";
import { navbar } from "./js/navbar.module.js";
document.addEventListener("DOMContentLoaded", () => {
    // navigation bar ...........................................................//
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
        navbar();  
        aboutSection();
    });  
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
  let sectionView=document.querySelectorAll(".show-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  sectionView.forEach(section => {
    observer.observe(section);
  });