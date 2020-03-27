export const fetchCollectionsPending = () => ({
    type: 'FETCH_COLLECTIONS_PENDING'
})

export const fetchCollectionsSuccess = (collection) => ({
    type: 'FETCH_COLLECTIONS_SUCCESS',
    payload: collection
})

export const fetchCollectionsError = (error) => ({
    type: 'FETCH_COLLECTIONS_ERROR',
    error: error
})

export const renderComponent = () => ({
    type: 'RENDER_COMPONENT'
})
