import React from 'react'
const {curry, map} = require('ramda')

// component :: Component -> Object -> dom
const component = curry((Component, data) => {
  return <Component {...data} />
})

// components :: Component -> [Object] -> [dom]
const components = curry((Component, items) =>
  items.map((data, key) => component(Component, {key: String(key), ...data}))
)

// validate :: Object -> function -> function
const validate = curry((validation, statelessComponent) => {
  const validated = (...args) => statelessComponent(...args)
  validated.propTypes = validation
  return validated
})

export {component, components, validate}
