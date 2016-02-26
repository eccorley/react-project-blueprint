import React from 'react'
import { IndexLink } from 'react-router'
import Title from 'react-title-component'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render="Awesome App"/>
        <h1>Welcome to your app.</h1>
        <ul>
          <li><IndexLink to="/">Home</IndexLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
