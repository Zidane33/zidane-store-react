import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetch from 'jest-fetch-mock';
import { fetchSections } from '../redux/directory/directory-reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Unit test action creators', () => {

    afterEach(() => {
        fetch.resetMocks();
    });

    it('Fetch sections error', () => {
        const store = mockStore({ directory: []})

        fetch.mockReject(() => {
            store.dispatch(fetchSections()).then(() => {
                return expect(store.getActions()[0].type).toEqual('FETCH_SECTIONS_ERROR');
            }).catch(e => console.log(e))
        })
    })

    it('Fetch sections success', () => {
        fetch.mockResponse('/', {
            headers: {
                'Content-type': 'application/json'
            },
            status: 200
        })
        
        const store = mockStore({})

        store.dispatch(fetchSections()).then(() => {
            return expect(store.getActions()[0].type).toEqual('FETCH_SECTIONS_SUCCESS');
        }).catch(e => console.log(e))
    })
})

