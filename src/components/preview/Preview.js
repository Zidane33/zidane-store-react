import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.styles.scss';

const Preview = (item) => (
    <div className='collection-preview'>
        <h1 className='title'>{item.name}</h1>
        <div className='preview'>
            <CollectionItem key={item.id} item={item} />
        </div>
    </div>
)

export default Preview;
