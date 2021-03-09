import React from 'react'
import data from './shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
const ShopPage = () => {
    return(
        <div className='shop-page'>
            {data.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

export default ShopPage;