'use strict';

let imgArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg'

];

// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

let imageSection = document.getElementById('imageSection');
let leftImage = document.getElementById( 'leftImage' );
let middleImage = document.getElementById( 'middleImage' );
let rightImage = document.getElementById( 'rightImage' );

let counter = 0;

function Images( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.clicks = 0 ;
  Images.all.push(this);
}

Images.all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  // console.log(imgArray[i].split( '.' ));
  new Images( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
  let leftIndex = randomNumber(0, imgArray.length - 1)  ;
  let rightIndex= randomNumber(0, imgArray.length - 1) ;
  let middleIndex;

  do {
    middleIndex = randomNumber(0, imgArray.length - 1);
  } while( leftIndex === rightIndex === middleImage );

  rightImage.src = Images.all[rightIndex].src;
  leftImage.src = Images.all[leftIndex].src;
  middleImage.src = Images.all[middleIndex].src;

  leftClicks = leftIndex
  rightClicks = rightIndex
  middleClicks = middleIndex

  Images.all[rightIndex].views++;
  Images.all[leftIndex].views++;
  Images.all[middleIndex].views++;


  console.log(Images.all);
}

let leftClicks = 0;
let middleClicks = 0;
let rightClicks = 0;

function eventHandler(e) {
  // console.log(e.target.id);
  if((e.target.id === 'rightImage' || e.target.id === 'leftImage'  || e.target.id === 'middleImage') && counter < 25){
      if (e.target.id === 'rightImage') {
        Images.all[rightClicks].clicks++;
      }
      if (e.target.id === 'leftImage') {
        Images.all[leftClicks].clicks++;
      }
      if (e.target.id === 'middleImage') {
        Images.all[middleClicks].clicks++;
      }


    render();
    counter++;

  }

}

imageSection.addEventListener('click', eventHandler);

render();

// console.log(Images.all);
// leftImage.setAttribute('src', Images.all[0].src)
// let index = randomNumber(0, imgArray.length - 1);
// rightImage.src = Images.all[index].src;
// console.log( leftImage, rightImage );

// Helper function
function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

