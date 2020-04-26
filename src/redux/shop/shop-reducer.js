import { fetchCollectionsError, fetchCollectionsSuccess } from './shop-actions';
const url = 'http://zidanestore-env.eba-vycsi7vs.us-east-1.elasticbeanstalk.com/product';


export const fetchCollections = () => {
    return dispatch => {
        fetch(url).then(res => res.json())
            .then(collection => {
                if(collection.error){
                    throw(collection.error);
                }
                dispatch(fetchCollectionsSuccess(collection));
                return collection;
            })
            .catch(error => {
                dispatch(fetchCollectionsError(error));
            })
    }
}

const INITIAL_STATE = {
    pending: true,
    error: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_COLLECTIONS_SUCCESS':
            return {
                ...state,
                collection: [...action.payload],
            }
        case 'FETCH_COLLECTIONS_ERROR':
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default shopReducer;
