import React from 'react';
import { connect } from 'react-redux';
import { getCollections, areCollectionLoaded } from '../../redux/shop/shop-selector';
import { fetchCollections } from '../../redux/shop/shop-reducer';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.styles.scss';

class Collection  extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchCollections());
    }
    
    render(){
        const { areCollectionLoaded, collection, match: { params: { collectionId } } } = this.props;

        if (!areCollectionLoaded){
            return (<h1>Loading</h1>)
        }

        return (
            <div className='collection-page'>
                <h2 className='title'>{collectionId}</h2>
                <div className='items'>
                    {
                        collection.filter(collection => collection.collection.title.toLowerCase() === collectionId).map(item => (
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
    areCollectionLoaded: areCollectionLoaded(state)
}); 

export default connect(mapStateToProps)(Collection);
