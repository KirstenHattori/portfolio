//STRETCH GOAL(S):
  // name space this functionality and any others if all the js is going to be in one place

//Rhymes with Kirsten Hattori fun! 
const rhymes = {
  'firstSyllable': [
    'beers',
    'dears',
    'ears',
    'fears',
    'gears',
    'hears',
    'lears',
    'nears',
    'peers',
    'sears',
    'tears',
    'years'
  ],
  'secondSyllable': [
    'bin',
    'din',
    'fin',
    'gin',
    'kin',
    'min',
    'pin',
    'sin',
    'tin',
    'win',
    'den',
    'hen',
    'men',
    'pen',
    'ten',
    'zen'
  ],
  'thirdSyllable': [
    'at',
    'bat',
    'cat',
    'fat',
    'gat',
    'hat',
    'lat',
    'mat',
    'nat',
    'pat',
    'rat',
    'sat',
    'tat',
    'vat',
  ],
  'fourthFifthSyllable': [
    'sorry',
    'story',
    'lorry',
    'quarry',
    'tory',
    'gory',
    'worry'
  ]
}

function randomPicker(arrayName) {
  const randomNumber = Math.floor(Math.random() * arrayName.length);
  // console.log(arrayName[randomNumber]);
  // to save ^ in a variable so that i can do things with it below we need the function to return the result of its calling
  return arrayName[randomNumber];
}

// should i make a function for the whole app?
function rhymesWith() {
  // calling the picker function
  const firstWord = randomPicker(rhymes.firstSyllable);
  const secondWord = randomPicker(rhymes.secondSyllable);
  const thirdWord = randomPicker(rhymes.thirdSyllable);
  const fourthFifthWord = randomPicker(rhymes.fourthFifthSyllable);


  // // passing the randomly selected words to the DOM method that will populate the page

  const bestWords = document.querySelector('.rhymes');
  // console.log(bestWords);
  bestWords.innerText = `${firstWord}-${secondWord} ${thirdWord}-${fourthFifthWord}`
}

// calling the rhymesWith function on page load so that it is there when the user opens the page
rhymesWith();

// button event handler for user to click that runs the random picker again
const button = document.querySelector('.also');
button.onclick = function () {
  rhymesWith();
}



//mobileNav .slideController ~~~~~~~

//event listener and handler on .slideOCntroller
const slideController = document.querySelector('.slideController');

const slider = document.querySelector('#slider');
const closed = document.querySelector('#closed');
const open = document.querySelector('#open');

slideController.onclick = function () {
  slider.classList.toggle('nunya');
  closed.classList.toggle('nunya');
  open.classList.toggle('nunya');
  
  // slideController.innerHTML = `<i class="fa-solid fa-lines-leaning"></i>`;

  // console.log(slide.innerHTML);
  // if (slide.innerHTML === `<i class="fa-solid fa-bars"></i>` ){
  //   slide.innerHTML = `<i class="fa-solid fa-lines-leaning"></i>`
  // } else if (slide.innerHTML === `<i class="fa-solid fa-lines-leaning"></i>`) {
  //   slide.innerHTML = `<i class="fa-solid fa-bars"></i>`
  // }
}

//when clicked: 
  //change the classlist to be the opposite
  //change visibility of slider to the opposite


  // 
  // <i class="fa-solid fa-lines-leaning"></i>