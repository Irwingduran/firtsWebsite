//HEADER 

const header = document.querySelector ('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add ('scrolled');
    } else {
        header.classList.remove ('scrolled');
    }
})

'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')





//SLIDER GALLERY 
// images setup
const images = [
    "https://images.unsplash.com/photo-1543777166-81504743e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=1920",
    "https://images.unsplash.com/photo-1574493264149-87880133a2ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2RteHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"     
];
  
  // content setup
const texts = [
    ["MI ARTE", "by: Irwing Durán"],
    ["GALERÍA", "f. Colección de fotografías"],
    ["FOTOGRAFÍA", "f. Arte de fijar"],
];
  
     // init plugin
     rgbKineticSlider = new rgbKineticSlider({
    // images and content sources
    slideImages: images, // array of images >demo size : 1920 x 1080
    itemsTitles: texts, // array of titles / subtitles
  
    // displacement images sources
    backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg", // slide displacement image
    cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png", // cursor displacement image
  
     // cursor displacement effect
    cursorImgEffect: true, // enable cursor effect
    cursorTextEffect: false, // enable cursor text effect
    cursorScaleIntensity: 0.65, // cursor effect intensity
    cursorMomentum: 0.14, // lower is slower
  
    // swipe
    swipe: true, // enable swipe
    swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
    swipeScaleIntensity: 2, // scale intensity during swipping
  
    // slide transition
    slideTransitionDuration: 1, // transition duration
    transitionScaleIntensity: 30, // scale intensity during transition
    transitionScaleAmplitude: 160, // scale amplitude during transition
  
    // regular navigation
    nav: true, // enable navigation
    navElement: ".main-nav", // set nav class
  
    // image rgb effect
    imagesRgbEffect: true, // enable img rgb effect
    imagesRgbIntensity: 0.9, // set img rgb intensity
    navImagesRgbIntensity: 80, // set img rgb intensity for regular nav
  
    // texts settings
    textsDisplay: true, // show title
    textsSubTitleDisplay: true, // show subtitles
    textsTiltEffect: true, // enable text tilt
    googleFonts: ["Josefin Sans:500", "Josefin Sans:300"], // select google font to use
    buttonMode: false, // enable button mode for title
    textsRgbEffect: true, // enable text rgb effect
    textsRgbIntensity: 0.03, // set text rgb intensity
    navTextsRgbIntensity: 15, // set text rgb intensity for regular nav
  
    textTitleColor: "white", // title color
    textTitleSize: 75, // title size
    mobileTextTitleSize: 75, // title size
    textTitleLetterspacing: 3, // title letterspacing
  
    textSubTitleColor: "white", // subtitle color ex : 0x000000
    textSubTitleSize: 50, // subtitle size
    mobileTextSubTitleSize: 50, // mobile subtitle size
    textSubTitleLetterspacing: 2, // subtitle letter spacing
    textSubTitleOffsetTop: 90, // subtitle offset top
    mobileTextSubTitleOffsetTop: 90 // mobile subtitle offset top
});


//EFECTO DE MAQUINA DE ESCRIBIR 
// const typed = new Typed ('.typed') , {
//     strings: [
//         '<i class="Soy">Soy Irwing Durán</i>' ,
//         '<i class="Soy">Desarrollador Web</i>' , 
//         '<i class="Soy">Trabajo como Freelance</i>'
//     ],
//     stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
// 	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
// 	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
// 	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
// 	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
// 	shuffle: false, // Alterar el orden en el que escribe las palabras.
// 	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
// 	loop: true, // Repetir el array de strings
// 	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
// 	showCursor: true, // Mostrar cursor palpitanto
// 	cursorChar: '|', // Caracter para el cursor
// 	contentType: 'html', // 'html' o 'null' para texto sin formato
// });


//BOTON PARA DESLIZAR HACIA ABAJO 
const links = document.querySelectorAll('.scroll-btn');

for (const link of links) {
  link.addEventListener('click',clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).
 offsetTop;

  scroll({
    top: offsetTop,
    behavior:'smooth'
});
}
 

//BOTONES PARA GALERIA DE FOTOS

function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }