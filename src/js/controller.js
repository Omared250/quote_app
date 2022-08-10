import * as model from './model.js';
import quoteView from './quoteView.js';

const loadAdvice = async function() {
    try {
        await model.loadQuote();
        quoteView.render(model.quote);
        getQuote();
    } catch (err) {
        console.error(err);
    }
}

const getQuote = async function() {
    try {
        const dice = document.querySelector('.dice');
        dice.addEventListener('click', async function(e) {
            e.preventDefault();
            quoteView.clearContainer();
            await loadAdvice();
        })
    } catch (err) {
        console.error(err);
    }
}

const init = function() {
    quoteView.addHandlerHome(loadAdvice)
};
init();