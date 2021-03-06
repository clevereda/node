let quotesData = [
  {
    quote:
      "I'm not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.",
    author: "Emma Watson",
  },
  {
    quote:
      "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: "Scott Adams",
  },
  {
    quote: "Intelligence plus character-that is the goal of true education.",
    author: "Martin Luther King, Jr.",
  },
];

let index = 0;
function getNextQuote() {
  // simply return the quote and the index (global),
  // then increment the index
  index++;
  index = index % quotesData.length;
  return quotesData[index];
}

module.exports = {
  quotes: quotesData,
  getNextQuote: getNextQuote,
};
