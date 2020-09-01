/* Section portfolio */
let myImages = Array.from(document.querySelectorAll("#portfolio .container .row  img"));
let lightBoxContainer = document.querySelector("#portfolio .lightbox-container");

let close = document.getElementById("close");
let prev = document.getElementById("prev");
let next = document.getElementById("next");


let currentImageIndex = 0 ;


/* To Show items */
for (let i=0 ; i<myImages.length ; i++)
{
    myImages[i].addEventListener("click" , displayLightBox)

}

function displayLightBox(eventInfo)
{
    let imgSrc = eventInfo.target.src;
    lightBoxContainer.style.display ="flex";
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+imgSrc+")";

    currentImageIndex = myImages.indexOf(eventInfo.target);
}


/* To Close lightbox */
close.addEventListener("click" , closeLightBox )

function closeLightBox()
{
    lightBoxContainer.style.display ="none";

}


/* To next item */
next.addEventListener("click" , goNext )

function goNext()
{
    currentImageIndex ++;

    if(currentImageIndex == myImages.length)
    {
        currentImageIndex = 0 ;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+ myImages[currentImageIndex].src +")";

}

/* To prev item */
prev.addEventListener("click" , goPrev )

function goPrev()
{
    currentImageIndex --;
    if(currentImageIndex < 0)
    {
        currentImageIndex = myImages.length-1 ;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage = "url("+ myImages[currentImageIndex].src +")";

}

/*---------------------------------------------------------------------------------------*/






 