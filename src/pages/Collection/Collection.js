import React from 'react';
import { connect } from 'react-redux';
import { getCollectionsPending, getCollectionsError, getCollections } from '../../redux/shop/shop-selector';
import { fetchCollections } from '../../redux/shop/shop-reducer';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.styles.scss';
import {renderComponent} from '../../redux/shop/shop-actions';

class Collection  extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchCollections());
    }

    componentDidUpdate(prevProps, prevState){
        if(true){
            this.props.dispatch(renderComponent());
        }
    }
    
    render(){
        const { error, pending, collection, match: { params: { collectionId } } } = this.props;

        if (pending | error){
            return (<h1>Loading</h1>)
        }

        return (
            <div className='collection-page'>
                <h2 className='title'>{collectionId}</h2>
                <div className='items'>
                    {
                        collection.filter(collection => collection.collection.route === collectionId).map(item => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    collection: getCollections(state),
    pending: getCollectionsPending(state),
    error: getCollectionsError(state)
}); 

export default connect(mapStateToProps)(Collection);
