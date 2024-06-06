import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'





const anotherElement = <a href="https://google.com" target="_blank">Visit Google</a>




// const reactElement = {    // Created a custom object for creating an <a> element with the help of a function.
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const username = " New_Username"

const reactElement = React.createElement(       // Note: It has its fixed way of pass the arguments.
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  username                    // If we want to add evaluated expression then is injected after creation of whole tree.

)


ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />             // This is the function call that return html from app.jsx

    // anotherElement     // here we could have just passed this html and it works fine.

    reactElement       //  yaha pe reactElement jo react library ke apne createElement method se bana hai wo pass kiya ja raha. and it returns an object just like we have created.
    
)

