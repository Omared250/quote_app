# quote_app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a Quote when the page loaded
- Click in the dice and generate a new Quote

### Screenshot

![Design](https://github.com/Omared250/quote_app/blob/main/src/design/desktop-design.jpg)
![Mobile Design](https://github.com/Omared250/quote_app/blob/main/src/design/mobile-design.jpg)
![Error Design](https://github.com/Omared250/quote_app/blob/main/src/design/err_preview.png)

### Links

- Solution URL: [https://github.com/Omared250/quote_app]
- Live Site URL: [no yet]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design
- Recursion
- [Vanilla JS]
- [Architecture - MVC]

### What I learned

With this project I was able to gain more confidence in CSS and HTML, I was also able to work more with the API CALLS and 
reinforce my knowledge of how to treat and use the information provided through the APIS, as well as practice more 
the concept of RECURSION in Vanilla JS

- RECURSION [https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/]

```js proud-of-this:
const loadAdvice = async function() {
    try {
        await model.loadQuote();
        quoteView.render(model.quote);
        getQuoteByClickDIce();
    } catch (err) {
        quoteView.renderError();
    }
}

const getQuoteByClickDIce = async function() {
    try {
        const dice = document.querySelector('.dice');
        dice.addEventListener('click', async function(e) {
            e.preventDefault();
            quoteView.clearContainer();
            await loadAdvice();
        })
    } catch (err) {
        quoteView.renderError();
    }
}
```

## Author

- Github - [Omar Ascanio](https://github.com/Omared250)
- Frontend Mentor - [@omared250](https://www.frontendmentor.io/profile/Omared250)
