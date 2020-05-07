/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
 * All quotations from:
 * Ratcliffe, S. (2017). Oxford Essential Quotations. Retrieved May 5 and May 6, 2020, 
 * from https://www.oxfordreference.com/view/10.1093/acref/9780191843730.001.0001/acref-9780191843730?rskey=oDaKHJ&result=1
***/

let quotes = [
  {
      quote: 'Education is the most powerful weapon which you can use to change the world.',
      source: 'Nelson Mandela',
      citation: 'Speech, Madison Park High School, Boston',
      year: 1990,
      birth: 1918,
      death: 2013
  },
  {
      quote: 'If you want to know the reason why I\'m standing here, it\'s because of education. I never cut class.',
      source: 'Michelle Obama',
      citation: 'Elizabeth Garrett Anderson School, London',
      year: 2009,
      birth: 1964
  },
  {
      quote: 'Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.',
      source: 'Martin Luther King',
      citation: 'Strength to Love, ch. 4',
      year: 1963,
      birth: 1929,
      death: 1968
  },
  {
      quote: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.',
      source: 'Bill Gates',
      citation: 'Independent on Sunday',
      year: 1997,
      birth: 1955
  },
  {
      quote: 'No pessimist ever discovered the secret of the stars or sailed to an uncharted land.',
      source: 'Helen Keller',
      citation: 'Optimism: an essay. Pt. 3',
      year: 1903,
      birth: 1880,
      death: 1968
  },
  {
      quote: 'One child, one teacher, one book and one pen can change the world. Education is the only solution. Education first.',
      source: 'Malala Yousafzai',
      citation: 'United Nations General Assembly',
      year: 2013,
      birth: 1997
  },
  {
      quote: 'We haven\'t got the money, so we\'ve got to think!',
      source: 'Ernest Rutherford',
      citation: 'Bulletin of the Institute of Physics vol. 13',
      year: 1962,
      birth: 1871,
      death: 1937
  },
  {
      quote: 'Some problems are so complex that you have to be highly intelligent and well informed just to be undecided about them.',
      source: 'Laurence J. Peter',
      citation: ' Peter\'s Almanac',
      year: 1982,
      birth: 1919,
      death: 1990
  },  
  {
      quote: 'One never notices what has been done; one can only see what remains to be done.',
      source: 'Marie Curie',
      citation: 'letter to her brother',
      year: 1894,
      birth: 1867,
      death: 1934
  },
  {
      quote: 'For it is not enough to have a good mind; the main thing is to use it well.',
      source: 'René Descartes',
      citation: 'Le Discours de la méthode pt. 1',
      year: 1637,
      birth: 1596,
      death: 1650
  }
]


/***
 * `getRandomQuote` function -> Creates a random number between 0 and lenght of the array - 1. 
 * This number is used as an index value to return a random quote.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length)); //based on a code snippet on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return quotes[randomNumber];
}


/***
 * `printQuote` function -> Creates an HTML string containing a random quote and prints it to the page.
 * Also changes the background color every time a new random quote gets displayed.
***/

const printQuote = function () {
  let randomQuote = getRandomQuote();
  let quoteHTML = ``;
  quoteHTML += `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source}`;
    if (randomQuote.citation) {quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`}
    if (randomQuote.year) {quoteHTML += `<span class="year"> ${randomQuote.year} </span>`}
    if (randomQuote.death) {quoteHTML += `<span>, (${randomQuote.birth} - ${randomQuote.death})</span>`} // if person is deceased "(year of birth - year of death)" is displayed
      else {quoteHTML += `<span>, (${randomQuote.birth} - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</span>`} // if person is still alive "(year of birth -       )" is displayed
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML; 
  const randomColor = Math.floor(Math.random()*16777215).toString(16); //based on a code snippet on: 
  document.body.style.backgroundColor = "#" + randomColor; // https://css-tricks.com/snippets/javascript/random-hex-color/ Creates a random background color using the basis 16 and the dezimal color code for white. 
}

printQuote(); // sets the initial quote to a random quote with a random background color


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * timing function to print a new quote automatically every 10 seconds.
***/

setInterval(function(){ printQuote() }, 10000); //based on a code snippet on: https://www.w3schools.com/jsref/met_win_setinterval.asp Automatically calls printQuote() every ten seconds.

