import React from 'react'
import {render} from 'react-dom'
import api from './api.json'
import App from './src/App'

render(<App data={api} />, document.getElementById('app'))
