import React, {Component} from 'react'
import {string, oneOf} from 'prop-types'
import './style.css'

class Media extends Component {
  constructor() {
    super()
  }

  static get propTypes() {
    return {
      type: oneOf(['img', 'video', 'audio']).isRequired,
      src: string.isRequired,
      title: string.isRequired,
      text: string.isRequired,
    }
  }

  render() {
    const {src, type, title, text} = this.props

    const elements = {
      img: src => <img className="media-item" src={src} />,
      video: src => <video className="media-item" src={src} />,
      audio: src => <audio className="media-item" src={src} />,
    }

    const item = elements[type](src)

    return (
      <div className="media-component">
        <div className="container">
          {item}
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Media
