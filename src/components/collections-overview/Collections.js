import React from 'react';
import { connect } from 'react-redux';
import { getCollections, getCollectionsError, getCollectionsPending } from '../../redux/shop/shop-selector';
import { fetchCollections } from '../../redux/shop/shop-reducer';
import { renderComponent } from '../../redux/shop/shop-actions';
import Preview from '../preview/Preview';
import './collections-overview.styles.scss';

class Collections extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchCollections());
    }

    componentDidUpdate(prevProps, prevState){
        if(true){
            this.props.dispatch(renderComponent());
        }
    }

    render() {
        const { error, pending, collection } = this.props;
        if(pending | error){
            return(<h1>Loading</h1>);
        }

        const collections = ['Hats', 'Jackets', 'Mens', 'Womens', 'Shoes'];
        
        return (
                <div className='collections-overview'>
                    {collections.map((collectionName, index) => {
                        const items = collection.filter(({ collection: collection }) => collection.title === collectionName);
                        return (
                            <Preview key={index} items={items} />
                        )}
                    )}
                </div>
            )
        };
}

const mapStateToProps = state => ({
    error: getCollectionsError(state),
    collection: getCollections(state),
    pending: getCollectionsPending(state)
});

export default connect(mapStateToProps)(Collections);
