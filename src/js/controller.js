import * as model from './model.js';
import quoteView from './quoteView.js';

const loadAdvice = async function() {
    try {
        await model.loadQuote();
        quoteView.render(model.quote);
    } catch (err) {
        console.error(err);
    }
}


const getQuote = function() {
    try {
        
    } catch (err) {
        console.error(err);
    }
}


const init = function() {
    quoteView.addHandlerHome(loadAdvice)
};
init();