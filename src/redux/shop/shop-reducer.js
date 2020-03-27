import { fetchCollectionsError, fetchCollectionsPending, fetchCollectionsSuccess } from './shop-actions';
const url = 'http://localhost:8080/product';


export const fetchCollections = () => {
    return dispatch => {
        dispatch(fetchCollectionsPending());
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
        case 'FETCH_COLLECTIONS_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_COLLECTIONS_SUCCESS':
            return {
                ...state,
                collection: [...action.payload],
            }
        case 'RENDER_COMPONENT':
            return {
                ...state,
                pending: false
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
