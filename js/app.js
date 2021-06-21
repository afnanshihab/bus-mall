'use strict';


// Constructor
// New obj
// prototype render
// Random function
// get by id
// Event Handler

const imageSection = document.getElementById('imageSection');
const leftImage = document.getElementById( 'leftImage' );
const middleImage = document.getElementById( 'middleImage' );
const rightImage = document.getElementById( 'rightImage' );
const viewResult = document.getElementById ('viewResult') ;
const listOfResult = document.getElementById ('listOfResult')

let rounds = 25 ;
let counter = 0;

let leftIndex ; 
let middleIndex ;
let rightIndex ;

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


function Images( name, src ) {
  this.name = name;
  this.src = `./img/${src}`;
  this.views = 0;
  this.clicks = 0 ;
  all.push(this);
}

let all = [];

for( let i = 0; i < imgArray.length; i++ ) {
  
  new Images( imgArray[i].split( '.' )[0], imgArray[i] );
}

function render() {
 leftIndex = randomNumber(0, imgArray.length - 1)  ;

  do {
    middleIndex = randomNumber(0, imgArray.length - 1);
    rightIndex= randomNumber(0, imgArray.length - 1) ;
  } while( leftIndex === rightIndex || leftIndex === middleIndex || rightIndex === middleIndex);

  rightImage.src = all[rightIndex].src;
  leftImage.src = all[leftIndex].src;
  middleImage.src = all[middleIndex].src;


  all[rightIndex].views++;
  all[leftIndex].views++;
  all[middleIndex].views++;


  console.log(all);
}



function eventHandler(e) {

  if((e.target.id === 'rightImage' || e.target.id === 'leftImage'  || e.target.id === 'middleImage') && counter < rounds){

      if (e.target.id === 'rightImage') {
        all[rightIndex].clicks++;
      }
      if (e.target.id === 'leftImage') {
        all[leftIndex].clicks++;
      }
      if (e.target.id === 'middleImage') {
        all[middleIndex].clicks++;
        console.log(all)
      }


    render();
    counter++;

  }

}

function printResult(e) {
  for (let i = 0; i < all.length; i++) {
    let li = document.createElement('li'); 
    listOfResult.appendChild(li); 
    li.textContent =`${all[i].name} had ${all[i].clicks} votes, and was seen ${all[i].views} times.`
  
  }
  viewResult.removeEventListener('click',printResult);
}

imageSection.addEventListener('click', eventHandler);
viewResult.addEventListener('click', printResult);


render();



function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

