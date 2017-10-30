// import React, { Component } from 'react'
const React = require('react')

class App extends React.Component {
    render () {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

module.exports = App
// export default App

/* const React = require('react')
const createReactClass = require('create-react-class')

module.exports = createReactClass({
    render: function() {
        return (
            <div>hello world {this.props.name}</div>
        )
        // React.createElement('div', null, 'Hello World')
      }
}) */