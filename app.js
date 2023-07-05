let Quote = document.getElementById("quote");
let Person = document.getElementById("person")
let Generator = document.getElementById("Generator");


let Quotes = [
    {quote: `"Be the best"`,
     person: `~ Steve Jobs`},
    {quote: `"Education is an ornament in prosperity and a refuge in adversity"`,
     person: `~ Steve Jobs`},
    {quote: `"Be Loved"`,
     person: `~ Steve`},
    {quote: `"Cleanliness is half of faith"`,
     person: `~ Muhammad`},
    {quote: `"The only thing I know is the fact that I know nothing"`,
     person: `~ Socrates`},
    {quote: `"Religion is the opium of the masses"`,
     person: `~ Karl Marx`},
    {quote: `"Black is beautiful"`,
     person: `~ Malcolm X`},
    {quote: `"Truth is dearer to me than my mother"`,
     person: `~ Steve Jobs`}
];

function newQuote() {
    let genQuote = Math.floor(Math.random() * Quotes.length);

    Quote.innerText = Quotes[genQuote].quote;
    Person.innerText = Quotes[genQuote].person;
}

