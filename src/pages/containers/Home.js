import React, {Component} from 'react'
import {renameProps, adaptProps} from '../../utils'
import {map} from 'ramda'
import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Brand from '../components/Brand'

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
        <Layout>
          <Brand />
          <Categories items={categoryItems} />
        </Layout>
      </div>
    )
  }
}

export default Home
