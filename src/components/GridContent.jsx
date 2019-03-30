import React from 'react'
import { Textfit } from 'react-textfit';


function GridContent(props) {
  return (
    <div>
      <div className="grid-image">Image</div>
      <div className="grid-text-container">
        {/* <Textfit className="grid-text-header" mode="multi"> */}
        <div className="grid-text-header">
          {props.text + " →"} 
        </div>
        {/* </Textfit> */}
        <Textfit className="grid-text-content" mode="multi">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
        </Textfit>
      </div>
    </div>
  )
}

export default GridContent
