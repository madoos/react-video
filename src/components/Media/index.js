import React, {Component} from 'react'
import {string, oneOf} from 'prop-types'
import './style.css'

class Media extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: this.props.author,
    }
  }

  static get propTypes() {
    return {
      type: oneOf(['img', 'video', 'audio']).isRequired,
      src: string.isRequired,
      cover: string.isRequired,
      author: string.isRequired,
      title: string.isRequired,
    }
  }

  handleClick = e => {
    this.setState({author: '**************************'})
  }

  static get mediaTypes() {
    return {
      img: src => <img className="media-item" src={src} />,
      video: (src, cover) => (
        <video className="media-item" src={src} poster={cover} />
      ),
      audio: src => <audio className="media-item" src={src} />,
    }
  }

  render() {
    const {src, type, title, cover} = this.props
    const {author} = this.state
    const elements = Media.mediaTypes
    const item = elements[type](src, cover)

    return (
      <div className="media-component" onClick={this.handleClick}>
        <div className="container">
          {item}
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
      </div>
    )
  }
}

export default Media
