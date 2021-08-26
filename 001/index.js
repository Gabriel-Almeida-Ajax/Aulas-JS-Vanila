class ComponentUsedGpx extends HTMLElement {
    constructor() {
        super();
        this.build();
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })


        const root = document.createElement('div')
        root.classList.add('container')
        root.innerHTML = `Hello, from customElement`

        this.styled({
            padding: '10px',
            backgroundColor: 'blue',
        })

        shadow.appendChild(this.styles(`
            .container {
                background-color: purple;
                color: white;
                padding: 10px;
                width: '150px',
                height: '150px',
            }
        `))



        shadow.appendChild(root)
    }

    styles(atributes) {
        const style = document.createElement('style')
        style.textContent = atributes

        return style
    }

    styled(atributes = new CSSStyleDeclaration()) {
        Object.entries(atributes).forEach(([attr, value]) => this.style[attr] = value)
        console.log(this.style)
    }



}

customElements.define('stars-rater', ComponentUsedGpx)