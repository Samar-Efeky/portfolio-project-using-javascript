import { aboutSection } from "./js/about.module.js";
import { navbar } from "./js/navbar.module.js";
import { setupObserver } from "./js/observer.module.js";
import { workImage } from "./js/work.module.js";
window.addEventListener('load',()=>{
  let loading=document.querySelector(".loading");
  loading.classList.replace("d-flex","d-none");
  document.body.style.overflow = 'auto';
});
document.addEventListener("DOMContentLoaded", () => {
    // navigation bar ...........................................................//
   navbar();
   if(document.querySelector(".working")){
    fetch("work.section.html")
          .then(response => response.text())
          .then(data => {
            document.querySelector(".working").innerHTML = data; 
            setupObserver();
            workImage();
            aboutSection();
    });
   };
   if(document.getElementById("Business")){
    fetch("business.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("Business").innerHTML = data; 
      setupObserver();
  });  
  };
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
  };
});