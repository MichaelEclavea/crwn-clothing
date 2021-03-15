import React from 'react';
import './collection.scss';

const Collection = ({ match }) => {
let category = match.params.categoryId;
    
    return(
        <div className='category'>
            <h2>Category Page!</h2>
            <h2>{category}</h2>
        </div>
    )
}

export default Collection;