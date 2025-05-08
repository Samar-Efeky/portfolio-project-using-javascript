export function aboutSection(){
 let sections=document.querySelectorAll(".about-content");
 let links=document.querySelectorAll(".links a");
 function showSection(sectionId, clickedLink){
    sections.forEach(section => {
        if (section.id === sectionId) {
          section.classList.remove("d-none");
          section.classList.add("d-block","show");
        } else {
          section.classList.remove("d-block","show");
          section.classList.add("d-none");
        }
      });
      links.forEach(link => link.classList.remove('active'));
      clickedLink.classList.add('active');  
 }
    links.forEach((link)=>{
    
        link.addEventListener("click",(e)=>{
          e.preventDefault();
            let sectionId = e.target.getAttribute('href').replace('#', '');
            showSection(sectionId, e.target);
        })
    });
    if (links.length > 0) {
      let firstLink = links[0];
      let sectionId = firstLink.getAttribute('href').replace('#', '');
      showSection(sectionId, firstLink);
    }
}