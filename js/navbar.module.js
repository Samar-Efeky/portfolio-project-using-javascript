// navigation bar  ............................................................//
export function navbar(){
    let navbarList=document.querySelector(".icons .fa-bars");
    let closedNavbar=document.querySelector(".icons .fa-xmark");
    let sidebarIcon=document.getElementById("list-navbar");
    let closeSidebar=document.getElementById("close-side-bar");
    let sidebar=document.querySelector(".side-bar");
    let navbar=document.querySelector(".navbar-links");
    let linkNavbar = document.querySelectorAll(".navbar-links a");
    const mediaQuery = window.matchMedia("(max-width: 950px)");
    // active navigation bar links .................................................//
   function removeActiveClass() {
        linkNavbar.forEach(link => link.classList.remove("active"));
    };
    linkNavbar.forEach((link)=>{
        link.addEventListener("click",(e)=>{
            if(window.innerWidth<=950){
                navbar.style.display="none";
                closedNavbar.style.display="none";
                navbarList.style.display="block";
            }
            setLinkActive();
            removeActiveClass();
            e.target.classList.add("active");
        });
    });
    function setLinkActive(){
         linkNavbar.forEach((link)=>{
        let currentUrl=location.pathname.split("/").pop().replace("/","");
        console.log(currentUrl);
        
        if(link.getAttribute("href")===currentUrl||link.getAttribute("href")===currentUrl+location.hash){
            link.classList.add("active");
        } 
        else if(link.getAttribute("href")==="index.html#home-page"&&currentUrl==="index.html"&&location.hash===""){
            link.classList.add("active");
        }
        else if(link.getAttribute("href")==="index.html#home-page"&&currentUrl===""&&location.hash===""){
            link.classList.add("active");
        }
    });
    }
    setLinkActive();
      
    // navigation bar links in small screens ..................//
    mediaQuery.addEventListener("change",(e)=>{
        if (!e.matches) {
            navbar.style.display = "flex";
            navbarList.style.display = "none";
            closedNavbar.style.display = "none";
        } else {
            navbar.style.display = "none";
            navbarList.style.display = "block";
            closedNavbar.style.display = "none";
        }
    });
    navbarList.addEventListener("click",()=>{
        navbar.style.display = "block";
        navbarList.style.display = "none";
        closedNavbar.style.display = "block";
    });
    closedNavbar.addEventListener("click",()=>{
            navbar.style.display = "none";
            navbarList.style.display = "block";
            closedNavbar.style.display = "none";
    });
    // side bar ................................................//
    sidebarIcon.addEventListener("click",()=>{
        sidebar.style.right="0%";
    });
    closeSidebar.addEventListener("click",()=>{
        sidebar.style.right="-100%";
    });
    // button go to contact page ..................................//
    let goToContactPage=document.querySelectorAll(".go-to-contact-page");
    goToContactPage.forEach((link)=>{
        link.addEventListener("click",()=>{
            window.location.href="contact.html";
            sidebar.style.right="-100%";
        });
    });
}