import React, { useState } from 'react'
import data from './shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
const ShopPage = () => {
    const [collections, setCollections] = useState(data);
    return(
        <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

export default ShopPage;