( function (){

    "use strict";
    
    var currentImage = 0;
    var myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

    var container = document.getElementById ('content');
    var nextBtn = document.getElementById ('next');
    var prevBtn = document.getElementById ('previous');

    //add the next button event listener
    nextBtn.addEventListener ('click', function (event) {
        event.preventDefault;

        currentImage++;

        if( currentImage > myPhotos.length-1) { currentImage = 0; }

    //adding the new slide on top
    //steps to follow
    //1. create a new image element
    //2. set the source attribute
    //3. set the class name
    //4.append it to the container
    
    newElement();
    });

    //adding the previous button event listener

    prevBtn.addEventListener ('click', function (event) {
        event.preventDefault;

        currentImage--;

        if( currentImage < 0 ) { currentImage = myPhotos.length-1 }

    newElement();
    });

    function newElement(){
    var newSlide = document.createElement ('img');
    newSlide.src = `slides/${ myPhotos [currentImage] }`;
    newSlide.className = 'fadeinimg';
    container.appendChild ( newSlide );
    

    //removing the bottom child incase we add more than two children

    if( container.children.length >2){
        container.removeChild (container.children[0]);
    }
    }
})();