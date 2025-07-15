// Import necessary modules
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Chai from './chai.jsx'

// Custom component
function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// JSX element
const anotherElement = (
  <a href="http://google.com" target='_blank'>visit google</a>
)

// React element using createElement
const reactElement = React.createElement(
  'div',
  null,
  React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit Google'
  ),
  anotherElement // adding this JSX as another child
)

// Render using createRoot from react-dom/client
const root = createRoot(document.getElementById('root'))
root.render(reactElement)
