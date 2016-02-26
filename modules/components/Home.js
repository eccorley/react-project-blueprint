import React                  from 'react'
import Title                  from 'react-title-component'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions           from '../actions'

const Home = React.createClass({
  componentDidMount() {
    this.props.sayHello()
  },
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <p>Home!</p>
        <p>Your API key is - {this.props.hello.key}!!!!]</p>
      </div>
    )
  }
})

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(Home)
