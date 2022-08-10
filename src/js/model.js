import { API } from "./config.js";
import { AJAX } from "./helper.js";

export const quote = {};

export const loadQuote = async function() {
    try {
        const dataQuote = await AJAX(API);
        quote.id = dataQuote.slip.id
        quote.advice = dataQuote.slip.advice;
    } catch (err) {
        throw err;
    }
}
