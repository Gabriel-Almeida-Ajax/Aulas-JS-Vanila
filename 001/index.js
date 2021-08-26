class ComponentUsedGpx extends HTMLElement {
    constructor(){
        super();
        this.build();
    }

    build(){
        const shadow = this.attachShadow({ mode: 'open' })
    

        this.styled({
            backgroundColor: 'red',
            width: '150px',
        })

        shadow.appendChild(this.styles(`
            div {
                background-color: # fff;
            }
        `))


        const root = document.createElement('div')

        shadow.appendChild(root)
    }
    
    styles(atributes){
        const style = document.createElement('style')
        style.textContent = atributes
        
        return style
    }

    styled(atributes = new CSSStyleDeclaration()){
        Object.entries(atributes).forEach(([attr, value]) => this.style[attr] = value)
        console.log(this.style)
    }
    

   
}

customElements.define('stars-rater', ComponentUsedGpx)