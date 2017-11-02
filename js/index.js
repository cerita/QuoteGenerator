//array of dance quotes
var quotes = [
  {
    quote: "Dance is the hidden language of the soul of the body",
    author: "Martha Graham"
  },
  {
    quote: "The dance is a poem of which each movement is a word.",
    author: "Mata Hari"
  },
  {
    quote: "Never give a sword to a man who can't dance.",
    author: "Confucius"
  },
  {
    quote: "I try to dress classy and dance cheesy.",
    author: "Psy"
  },
  {
    quote: "We should consider every day lost on which we have not danced at least once",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Nobody cares if you can't dance well. Just get up and dance",
    author: "Dave Barry"
  },
  {
    quote: "And those who were seen dancing were thought to be insane by those who could not hear the music.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "Dance for yourself. If someone understands, good. If not, no matter. Go right on doing what interests you, and do it until it stops interesting you.",
    author: "Louis Horst"
  },
  {
    quote: "To watch us dance is to hear our hearts speak.",
    author: "Indian Proverb"
  }
  ];

//variables to use 
var button = document.getElementById("quote-button"),
  content = document.getElementById("quote-content"),
  author = document.getElementById("quote-author"),
  random;

//generate random quote
window.onload = randomQuote();
button.addEventListener('click', randomQuote);

//generate random quote
function randomQuote() {
  //get a random number to pick a quote
  random = Math.floor(Math.random() * quotes.length);
  // //get quote content for random number
  content.innerHTML = quotes[random].quote;
  // //get author for quote
  author.innerHTML = '&mdash; ' + quotes[random].author;
}
