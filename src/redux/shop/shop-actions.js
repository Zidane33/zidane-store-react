export const fetchCollectionsSuccess = (collection) => ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collection
})

export const fetchCollectionsError = (error) => ({
    type: 'FETCH_COLLECTIONS_ERROR',
    error: error
})
