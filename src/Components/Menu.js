import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = ({onClick}) => { 

    return (
      <div className="colorOptions">
          <Color color ="pink" handleClick={onClick}></Color>
          <Color color="orange" handleClick={onClick}></Color>
          <Color color="green" handleClick={onClick}></Color>
          <Color color="teal" handleClick={onClick}></Color>
          <Color color="yellow" handleClick={onClick}></Color>
      </div>
    );
}

export default Menu;