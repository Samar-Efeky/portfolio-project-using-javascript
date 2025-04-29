import { navbar } from "./js/navbar.module.js";
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
        navbar();  
      });
  });