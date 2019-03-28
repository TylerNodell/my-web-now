import React from 'react'
import { Textfit } from 'react-textfit';


function GridContent(props) {
  return (
    <div>
      <div className="grid-image">Image</div>
      <div className="grid-text-container">
        <Textfit className="grid-text-header" mode="multi">
          {props.text} →	
        </Textfit>
        <Textfit className="grid-text-content" mode="multi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Textfit>
      </div>
    </div>
  )
}

export default GridContent
