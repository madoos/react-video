import React, {Component, memo} from 'react'
import {string, oneOf} from 'prop-types'
import './style.css'
import {eqProps} from 'ramda'
import {validate} from '../../../../../utils'

const applyValidation = validate({
  type: oneOf(['img', 'video', 'audio']).isRequired,
  src: string.isRequired,
  cover: string.isRequired,
  author: string.isRequired,
  title: string.isRequired,
})

const sources = {
  img: src => <img className="media-item" src={src} />,
  video: (src, cover) => (
    <video className="media-item" src={src} poster={cover} />
  ),
  audio: src => <audio className="media-item" src={src} />,
}

const Media = ({src, type, title, cover, author}) => {
  const item = sources[type](src, cover)

  return (
    <div className="media-component">
      <div className="container">
        {item}
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default applyValidation(Media)
