import React, { Component } from 'react'

class displayText extends Component
{

  render()
  {
    return(
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default displayText
