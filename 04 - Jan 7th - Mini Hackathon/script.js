const photos = [
    "https://media.istockphoto.com/id/1413758192/photo/business-people-shaking-hands-during-meeting.jpg?s=612x612&w=0&k=20&c=KEXFb4H9wEY1isR34kgc71eDgYZX1q6dXNbpVhKMm1c=",
    "https://media.istockphoto.com/id/1363104923/photo/diverse-modern-office-businessman-leads-business-meeting-with-managers-talks-uses.jpg?s=612x612&w=0&k=20&c=R6-SufHacJ6bCnviq37kik2Jl6RMdECybcUpEoRuMLs=",
    "https://media.istockphoto.com/id/1402667894/photo/energy-lecture-screen.jpg?s=612x612&w=0&k=20&c=69CyBqRiHWPdYGn2ToXUIeMYVj76rnoA4MHFYEpZCOg=",
    "https://media.gettyimages.com/id/539939882/photo/bill-gates-chairman-and-chief-software-architect-for-microsoft-corporation-is-the-keynote.jpg?s=612x612&w=0&k=20&c=ROQjDVZTJy_SzVQR-JzZWDcUjrDuQzB79Ex71AubvOo="
];

const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const image = document.querySelector("#photo");

let idx = 0; 
let interval = null; 

image.setAttribute("src", photos[idx]);

function moveLeft() {
    idx = (idx === 0) ? photos.length - 1 : idx - 1;
    updateImage();
    resetSlideshow();
}

function moveRight() {
    idx = (idx === photos.length - 1) ? 0 : idx + 1;
    updateImage();
    resetSlideshow();
}

function updateImage() {
    image.setAttribute("src", photos[idx]);
}

function startSlideshow() {
    interval = setInterval(moveRight, 5000);
}

function resetSlideshow() {
    clearInterval(interval);
    startSlideshow();
}

leftButton.addEventListener("click", moveLeft);
rightButton.addEventListener("click", moveRight);

startSlideshow();
