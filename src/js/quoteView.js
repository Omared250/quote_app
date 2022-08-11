class QuoteView {
    _parentEl = document.querySelector('.container');
    _data;
    _errorMessage = 'Uuups. We have a problem'

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

    renderError(message = this._errorMessage) {
        const markup = `
        <div class="error">
        <img src="/src/images/errorimage.png" alt="error image"></img>
        <p>${message}!</p>
        </div>`
        this.clearContainer();
        this._parentEl.insertAdjacentHTML('beforeend', markup);
    }

    _generateQuoteMarkup() {
        return `
        <h3>ADVICE #${this._data.id}</h3>
        <p>"${this._data.advice}"</p>
        <img src="./src/images/pattern-divider-desktop.svg" alt="divider" class="divider"><br>
        <div class="dice"><img src="./src/images/icon-dice.svg" alt="dice">
        </div>`
    }

}

export default new QuoteView();