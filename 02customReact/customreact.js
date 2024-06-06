function customRender(reactElement, container){    
    // Function to create and add custom element to html where 1.reactElement -> the element that we have to add  & 2.container -> where will the reactElement be added.
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    // Making this code modular for adding attributes.

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;        // This line was use earlier because earlier the children was included in the props         
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {    // Created a custom object for creating an <a> element with the help of a function.
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)