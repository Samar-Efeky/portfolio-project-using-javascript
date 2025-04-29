// navigation bar  ............................................................//
export function navbar(){
    let navbarList=document.querySelector(".icons .fa-bars");
    let closedNavbar=document.querySelector(".icons .fa-xmark");
    let sidebarIcon=document.getElementById("list-navbar");
    let closeSidebar=document.getElementById("close-side-bar");
    let sidebar=document.querySelector(".side-bar");
    let navbarContent=document.querySelector(".navbar-content");
    // navigation bar links in small screens ..................//
    navbarList.addEventListener("click",()=>{
    let navbar=document.querySelector(".navbar-links");
    navbar.style.display="block";
    navbarList.style.display="none";
    closedNavbar.style.display="block";
    });
    closedNavbar.addEventListener("click",()=>{
    let navbar=document.querySelector(".navbar-links");
    navbar.style.display="none";
    navbarList.style.display="block";
    closedNavbar.style.display="none";
    });
    // side bar ................................................//
    sidebarIcon.addEventListener("click",()=>{
        sidebar.style.right="0%";
    });
    closeSidebar.addEventListener("click",()=>{
        sidebar.style.right="-200%";
    });
    // navigation bar opacity change  ..........................//
    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        if (scrollPosition < 10 || scrollPosition >= 1500) {
          navbarContent.style.backgroundColor = "black"; 
        } else if (scrollPosition >= 10 && scrollPosition < 1500) {
          navbarContent.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        }
    });
}