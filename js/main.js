document.getElementById("Quote-Generator-info").innerHTML = `
<h1>Quote of the Day</h1>
<p>Press the button below to recieve a random quote!</p>
<button onclick="getQutes()" id="btn"></button>
<p id="quotes-msg"></p>
<p id="quotes-auther"></p>
`;

document.getElementById("btn").innerHTML = "New Quote";

var qoutes = [
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    author: "― Oscar Wilde",
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: "― Mae West",
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: "― Mahatma Gandhi",
  },
  {
    quote: `“If you tell the truth, you don't have to remember anything.”`,
    author: "― Mark Twain",
  },
  {
    quote: `“Without music, life would be a mistake.”`,
    author: "― Friedrich Nietzsche",
  },
  {
    quote: `“A friend is someone who knows all about you and still loves you.”`,
    author: "― Elbert Hubbard",
  },
];
var random;
var flag_random;
function getQutes() {
  random = Math.floor(Math.random() * qoutes.length);
  while (true) {
    if (random == flag_random) {
      random = Math.floor(Math.random() * qoutes.length);
    } else {
      break;
    }
  }
  document.getElementById("quotes-msg").innerHTML = qoutes[random].quote;
  document.getElementById("quotes-auther").innerHTML = qoutes[random].author;
  flag_random = random;
}
