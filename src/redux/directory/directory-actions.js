export const fetchSectionsSuccess = (section) => ({
    type: 'FETCH_SECTIONS_SUCCESS',
    payload: section
})

export const fetchSectionsError = (error) => ({
    type: 'FETCH_SECTIONS_ERROR',
    error: error
})
