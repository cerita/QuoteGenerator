$(document).ready(function() {

  var quotes = [
    ["Dance is the hidden language of the soul of the body", "Martha Graham"],
    ["The dance is a poem of which each movement is a word.", "Mata Hari"],
    ["Never give a sword to a man who can't dance.", "Confucius"],
    ["I try to dress classy and dance cheesy.", "Psy"],
    ["I dance. I don't really do anything else.", "Maddie Ziegler"],
    ["We should consider every day lost on which we have not danced at least once", "Friedrich Nietzsche"],
    ["I learned how to communicate and articulate myself from ballet. It's just insane to me, when they don't think of that as a part of our education.", "Misty Copeland"],
    ["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
    ["There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle", "Albert Einstein"],
    ["It is our choices, Harry, that show what we truly are, far more than our abilities.", " J.K. Rowling, Harry Potter and the Chamber of Secrets"],
    ["Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten", "Neil Gaiman, Coraline"],
    ["The books that the world calls immoral are books that show the world its own shame.", "Oscar Wilde, The Picture of Dorian Gray"],
    ["But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light", "J.K. Rowling, Harry Potter and the Prisoner of Azkaban"],
    ["There is no need to call me Sir, Professor", "J.K. Rowling, Harry Potter and the Half-Blood Prince"],
    ["Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "Thomas A. Edison"], 
    ["Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", "Buddha"], 
    ["How many cares one loses when one decides not to be something but to be someone.", "Gabrielle “Coco” Chanel"], 
    ["Better to write for yourself and have no public, than to write for the public and have no self.", "Cyril Connolly"], 
    ["When bad things happen, I know you want to believe they are a joke, but sometimes life is scary and dark. That is why we must find the light", "BMO, Adventure Time"], 
    ["I just can't believe you guys are like a bazillion years old! How do you find a cake big enough for all that many candles?", "Steven Universe"]
    
  ];

  $(".genbtn").click(function() {
    $(".display-quote").fadeOut("fast", function() {
      var x = Math.floor((Math.random() * quotes.length - 1) + 1);
      $(".quote").html(quotes[x][0]);
      $(".source").html("– " + quotes[x][1]);
      
      $(this).fadeIn("fast");
    });
  console.log("success");
  });

});