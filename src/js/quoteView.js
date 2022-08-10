class QuoteView {
    _parentEl = document.querySelector('.container');
    _data;

    addHandlerHome(handler) {
        ['load'].forEach(ev => window.addEventListener(ev, handler()));
    };

    render(data) {
        this._data = data;
        const markup = this._generateQuoteMarkup();
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    clearContainer() {
        this._parentEl.innerHTML = '';
    }

    _generateQuoteMarkup() {
        return `
        <h3>Advice #${this._data.id}</h3>
        <h2>"${this._data.advice}"</h2>
        <img src="./src/images/pattern-divider-desktop.svg" alt="divider"><br>
        <div class="dice"><img src="./src/images/icon-dice.svg" alt="dice">
        </div>`
    }

}

export default new QuoteView();