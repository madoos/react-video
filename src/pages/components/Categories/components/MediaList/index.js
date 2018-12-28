import React, {Component} from 'react'
import Media from '../Media'
import {validate, components} from '../../../../../utils'
import {array, string} from 'prop-types'
import './style.css'

const applyValidation = validate({
  title: string.isRequired,
  items: array.isRequired,
})

const MediaList = ({items, title}) => {
  return (
    <div className="media-list-component">
      <h2>{title}</h2>
      <div className="items">{components(Media, items)}</div>
    </div>
  )
}

export default MediaList
