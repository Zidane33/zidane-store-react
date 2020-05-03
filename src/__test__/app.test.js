import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'jest-fetch-mock';
import { fetchSections } from '../redux/directory/directory-reducer';
import { fetchCollections } from '../redux/shop/shop-reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('testing fetch calls to backend', () => {

    afterEach(() => {
        fetch.resetMocks();
    });

    it('Fetch sections error', () => {
        const store = mockStore({})

        fetch.mockReject(() => {
            store.dispatch(fetchSections()).then(() => {
                return expect(store.getActions()[0].type).toEqual('FETCH_SECTIONS_ERROR');
            }).catch(e => console.log(e))
        })
    })

    it('Fetch sections success', () => {
        const store = mockStore({})

        fetch.mockResponse('/', {
            headers: {
                'Content-type': 'application/json'
            },
            status: 200
        })

        store.dispatch(fetchSections()).then(() => {
            return expect(store.getActions()[0].type).toEqual('FETCH_SECTIONS_SUCCESS');
        }).catch(e => console.log(e))
    })

    it('Fetch products error', () => {
       const store = mockStore({});

        fetch.mockReject(() => {
            store.dispatch(fetchCollections()).then(() => {
                return expect(store.getActions()[0].type).toEqual('FETCH_COLLECTIONS_ERROR')
            }).catch(e => console.log(e));
        })
    })

    it('Fetch products success', () => {
        const store = mockStore({});
        
        fetch.mockResponse('/shop', {
            status: 200
        })

        store.dispatch(fetchCollections()).then(() => {
            return expect(store.getActions()[0].type).toEqual('FETCH_COLLECTIONS_SUCCESS')
        }).catch(e => console.log(e));
    })
})

