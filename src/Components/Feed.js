import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [blocks, setBlocks] = useState([]);

    const updateBlocks = (boxColor) => {
        setBlocks(posts => [boxColor, ...posts]);
    };

    const posts = blocks.map((col) => <Block color={col} caption={col}></Block>);
        
    return (
        <div>
            <Menu onClick={updateBlocks}></Menu>
            {posts}
        </div>
    );
}

export default Feed;