import { aboutSection } from "./js/about.module.js";
import { navbar } from "./js/navbar.module.js";
import { setupObserver } from "./js/observer.module.js";
import { workImage } from "./js/work.module.js";
document.addEventListener("DOMContentLoaded", () => {
    // navigation bar ...........................................................//
    fetch("navbar.html")
          .then(response => response.text())
          .then(data => {
            document.getElementById("navbar").innerHTML = data;
            navbar();  
    }); 
    fetch("work.section.html")
          .then(response => response.text())
          .then(data => {
            document.querySelector(".working").innerHTML = data; 
            setupObserver();
            workImage();
            aboutSection();
    });
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