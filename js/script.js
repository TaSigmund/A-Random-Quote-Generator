/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
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
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * ((quotes.length -1) - Math.ceil(0) + 1)) + Math.ceil(0); // random number between 0 and lenght of the array - 1. Based on a code snippet on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return quotes[randomNumber]
}


/***
 * `printQuote` function
***/
const printQuote = function () {
  let randomQuote = getRandomQuote();
  let quoteHTML = ``;
  quoteHTML += `<p class="quote"> ${randomQuote.quote} </p> <p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation) {quoteHTML += `<span class="citation"> ${randomQuote.citation} </span>`}
  if (randomQuote.year) {quoteHTML += `<span class="year"> ${randomQuote.year} </span>`}
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML; 
  return quoteHTML;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

