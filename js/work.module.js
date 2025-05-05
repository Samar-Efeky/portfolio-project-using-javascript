export function workImage(){
    let workImages=Array.from(document.querySelectorAll(".work-image-click"));
    let lightBoxContainer=document.getElementById("lightBoxContainer");
    let boxItemImg=document.getElementById("boxItemImg");
    let nextImage=document.getElementById("next");
    let prevImage=document.getElementById("prev");
    let closedImage=document.getElementById("closed-image");
    let indexItem=document.getElementById("index-item");
    let currentIndex=0;
    let imagesLength=0;
    workImages.forEach((image) => {
        image.addEventListener("click", (e) => {
            let imgSrc = image.querySelector("img").getAttribute("src");
            lightBoxContainer.classList.replace("d-none", "d-flex");
            boxItemImg.setAttribute("src", imgSrc);
            currentIndex = workImages.indexOf(image);
            imagesLength = workImages.length;
            indexItem.innerHTML = `${currentIndex+1}/${imagesLength}`;
        });
    });
    function nextSlider(){
        currentIndex++;
        if(currentIndex==workImages.length){
            currentIndex=0;
        };
        let imgSrc=workImages[currentIndex].querySelector("img").getAttribute("src");
        boxItemImg.setAttribute("src",imgSrc);
        imagesLength=workImages.length;
        indexItem.innerHTML=`${currentIndex+1}/${imagesLength}`;
    };
    function prevSlider(){
        currentIndex--;
        if(currentIndex<0){
            currentIndex=workImages.length-1;
        };
        let imgSrc=workImages[currentIndex].querySelector("img").getAttribute("src");
        boxItemImg.setAttribute("src",imgSrc);
        imagesLength=workImages.length;
        indexItem.innerHTML=`${currentIndex+1}/${imagesLength}`;
    };
    lightBoxContainer.addEventListener("click", (e) => {
        if (e.target === lightBoxContainer) {
            lightBoxContainer.classList.replace("d-flex", "d-none");
        };
    });
    closedImage.addEventListener("click",()=>{
        lightBoxContainer.classList.replace("d-flex", "d-none");
    });
    nextImage.addEventListener("click",()=>{
        nextSlider();
    });
    prevImage.addEventListener("click",()=>{
        prevSlider();
    });
}