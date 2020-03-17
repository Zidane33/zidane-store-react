import React from 'react';
import { Route } from 'react-router-dom';
import Collections from '../../components/collections-overview/Collections';
import Collection from '../Collection/Collection';

const Shop = ({ match }) =>
         (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={Collections} />
                <Route exact path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        );

export default Shop;
