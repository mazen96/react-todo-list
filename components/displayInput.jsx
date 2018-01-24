import React, { Component } from 'react'
import displayText from './displayText.jsx'


class displayInput extends Component
{
  constructor(props, context)
  {
    super(props, context)
    this.state = {
      inputText: 'initial text'
    }
  }

  handleChange(event)
  {
    this.setState({inputText: event.target.value})
  }

  render()
  {
    return(
      <div>
        <input type='text' onChange={this.handleChange.bind(this)}/>
        <displayText text={this.state.inputText}/>
      </div>
    )
  }
}

export default displayInput
