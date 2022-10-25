import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    return (
      <div className="colorOptions">
          <Color color ="pink" handleClick={props.onClick}></Color>
          <Color color="orange" handleClick={props.onClick}></Color>
          <Color color="green" handleClick={props.onClick}></Color>
          <Color color="teal" handleClick={props.onClick}></Color>
          <Color color="yellow" handleClick={props.onClick}></Color>
      </div>
    );
}

export default Menu;