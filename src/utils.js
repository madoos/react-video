import React from 'react'
import {map, pipe, keys, curry, assoc, reduce} from 'ramda'

// component :: Component -> Object -> dom
const component = curry((Component, data) => {
  return <Component {...data} />
})

// components :: Component -> [Object] -> [dom]
const components = curry((Component, items) => {
  return items.map((data, key) =>
    component(Component, {key: String(key), ...data})
  )
})

// validate :: Object -> function -> function
const validate = curry((validation, statelessComponent) => {
  statelessComponent.propTypes = validation
  return statelessComponent
})

const adaptProps = curry((WrappedComponent, f) => {
  return props => <WrappedComponent {...f(props)} />
})

const renameProps = curry((keysMap, obj) =>
  reduce((acc, key) => assoc(keysMap[key] || key, obj[key], acc), {}, keys(obj))
)

export {component, components, validate, adaptProps, renameProps}
