import React from 'react'
import ReactDOM from 'react-dom'

// components
import MediaList from './components/MediaList'

// utils
const {render} = ReactDOM
import data from './api.json'
const playlist = data.categories[0].playlist

const app = (
  <div>
    <MediaList items={playlist} />
  </div>
)

const appContainer = document.getElementById('app')

render(app, appContainer)
