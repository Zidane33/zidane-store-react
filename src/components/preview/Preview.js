import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.styles.scss';
import { Link } from 'react-router-dom';

const Preview = (items) => (
    <div className='collection-preview'>
        <Link to={`/shop/${items.items[0].collection.title.toLowerCase()}`}>
            <h1 className='title'>{items.items[0].collection.title}</h1>
        </Link>
        <div className='preview'>
            {items.items.filter((items, index) => index < 4).map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default Preview;
