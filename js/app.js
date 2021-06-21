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
      } else if (counter>= 20) {

        drowChart() ;
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

function drowChart() {
  let name = []; 
  let clicks = [] ; 
  let views = [] ; 
  for (let i = 0; i < all.length; i++) {
    name.push(all[i].name);
    views.push(all[i].views);
    clicks.push(all[i].clicks);
    
  }
  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: name,
        datasets: [{
            label: ' # of clicks',
            data: clicks,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5


        } ,{  label: ' # of views',
        data: views,
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 5

        }]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

myChart.datasets
}




function randomNumber( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min ); //The maximum is inclusive and the minimum is inclusive
}

