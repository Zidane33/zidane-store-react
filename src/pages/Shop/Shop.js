import React from 'react';
import { connect } from 'react-redux';
import Preview from '../../components/preview/Preview';
import {selectShopCollections} from '../../redux/shop/shop-selector.js';

const Shop = ({ collections }) =>
         (
            <div className='shop-page'>
                {collections.map(({id, ...otherProps}) => (
                    <Preview key={id} {...otherProps} />
                ))}
            </div>
        );

const mapStateToProps = state => ({
    collections: selectShopCollections(state),
})

export default connect(mapStateToProps)(Shop);
