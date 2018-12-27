import React from 'react'
import ReactDOM from 'react-dom'

// components
import Media from './components/Media'

// utils
import {components} from './utils'
const {render} = ReactDOM

// app
const items = [
  {
    title: 'IMG BMV R-1000',
    text: 'The best caferacer motor',
    src:
      'https://www.caferacerdreams.es/wp-content/uploads/2018/02/BMW-R100-CRD105-2-600x315.jpg',
    type: 'img',
  },

  {
    title: 'VIDEO 3D tutorial',
    text: 'World is changed',
    src: 'https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm',
    type: 'video',
  },
  {
    title: 'AUDIO People',
    text: 'audio example',
    src: 'https://sample-videos.com/audio/mp3/crowd-cheering.mp3',
    type: 'audio',
  },
]

const app = <div>{components(Media, items)}</div>

const appContainer = document.getElementById('app')

render(app, appContainer)
