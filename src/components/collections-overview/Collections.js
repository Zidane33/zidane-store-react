import React from 'react';
import { connect } from 'react-redux';
import { getCollections, areCollectionLoaded } from '../../redux/shop/shop-selector';
import { fetchCollections } from '../../redux/shop/shop-reducer';
import Preview from '../preview/Preview';
import './collections-overview.styles.scss';

class Collections extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchCollections());
    }

    render() {
        const { areCollectionLoaded, collection } = this.props;
        if(!areCollectionLoaded){
            return(<h1>Loading</h1>);
        }

        const collections = ['Art', 'Home', 'Kitchen', 'Handbags', 'Jewelry'];
        
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
    collection: getCollections(state),
    areCollectionLoaded: areCollectionLoaded(state)
});

export default connect(mapStateToProps)(Collections);
