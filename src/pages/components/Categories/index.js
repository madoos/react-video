import React from 'react'
import {array} from 'prop-types'
import MediaList from './components/MediaList'
import {components, validate} from '../../../utils'

const applyValidation = validate({
  items: array.isRequired,
})

const Categories = ({items}) => (
  <div className="categories-component">{components(MediaList, items)}</div>
)

export default applyValidation(Categories)
