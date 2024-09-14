document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelectorAll ("img");

for(const imgaes of images){
    fetch("https://dog.ceo/api/breeds/image/random") 
    .then(response => response.json())
    .then(data => {image.src = data.message
                   image.wdith = 100; 
                   image. height = 100;
    })

}

})