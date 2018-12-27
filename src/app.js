import React from 'react'
import ReactDOM from 'react-dom'

const {render} = ReactDOM

const app = <h1>App message!</h1>
const appContainer = document.getElementById('app')

render(app, appContainer)
