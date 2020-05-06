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
      year: 1990
  },
  {
      quote: 'If you want to know the reason why I\'m standing here, it\'s because of education. I never cut class.',
      source: 'Michelle Obama',
      citation: 'Elizabeth Garrett Anderson School, London',
      year: 2009
  },
  {
      quote: 'Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.',
      source: 'Martin Luther King',
      citation: 'Strength to Love, ch. 4',
      year: 1963
  },
  {
      quote: 'Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.',
      source: 'Bill Gates',
      citation: 'Independent on Sunday',
      year: 1997
  },
  {
      quote: 'No pessimist ever discovered the secret of the stars or sailed to an uncharted land.',
      source: 'Helen Keller',
      citation: 'Optimism: an essay. Pt. 3',
      year: 1903
  },
  {
      quote: 'One child, one teacher, one book and one pen can change the world. Education is the only solution. Education first.',
      source: 'Malala Yousafzai',
      citation: 'United Nations General Assembly',
      year: 2013
  }
]


/***
 * `getRandomQuote` function -> Creates a random number between 0 and lenght of the array - 1. 
 * This number is used as an index value to return a random quote.
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * ((quotes.length -1) - Math.ceil(0) + 1)) + Math.ceil(0); //based on a code snippet on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML; 
  const randomColor = Math.floor(Math.random()*16777215).toString(16); //based on a code snippet on: 
  document.body.style.backgroundColor = "#" + randomColor; // https://css-tricks.com/snippets/javascript/random-hex-color/
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * timing function to print a new quote automatically every 10 seconds.
***/
setInterval(function(){ printQuote() }, 10000); //based on a code snippet on: https://www.w3schools.com/jsref/met_win_setinterval.asp

