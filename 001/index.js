class Stars extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = 'Hello, world!'
    }

}

customElements.define('stars-rater', Stars)