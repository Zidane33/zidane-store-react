import React from 'react';
import ShopData from './ShopData.js';
import Preview from '../../components/preview/Preview';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            collection: ShopData,
        }
    }

    render() {
        const {collection} = this.state;
        return (
            <div className='shop-page'>
                {collection.map(({id, ...otherProps}) => (
                    <Preview key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default Shop;
