import React, {Component} from 'react'
import Media from '../Media'
import {components, validate} from '../../utils'
import {array} from 'prop-types'

const applyValidation = validate({
  items: array.isRequired,
})

const MediaList = ({items}) => (
  <div className="media-list-component">{components(Media, items)}</div>
)

export default applyValidation(MediaList)
