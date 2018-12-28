import React, {Component} from 'react'
import {renameProps, adaptProps} from '../../utils'
import {map} from 'ramda'
import HomeLayout from '../components/HomeLayout'
import Categories from '../components/categories'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {categories} = this.props.data
    const categoryItems = map(renameProps({playlist: 'items'}), categories)
    return (
      <div>
        <HomeLayout>
          <Categories items={categoryItems} />
        </HomeLayout>
      </div>
    )
  }
}

export default Home
