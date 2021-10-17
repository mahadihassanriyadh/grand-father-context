import React from 'react';
import Special from '../Special/Special';

const MySelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>Eije dekho ami</h2>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;