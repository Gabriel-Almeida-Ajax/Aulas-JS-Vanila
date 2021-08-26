class Stars extends HTMLElement, Gpx {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open' })
        
        this.styled({
            backgroundColor: 'red',
            width: '150px',

        })

        shadow.appendChild(this.styles(`
            .hello .world > div {
                background-color: # fff;
            }
        `))
    }

    build(){

    }

    styles(atributes){
        const style = document.createElement('style')
        style.textContent = atributes
        
        return style
    }
}

class Gpx {
    constructor(){

    }

    styled(atributes = new CSSStyleDeclaration()){
        Object.entries(atributes).forEach(([attr, value]) => this.style[attr] = value)
        console.log(this.style)
    }

}

customElements.define('stars-rater', Stars)