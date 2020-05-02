import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetch from 'jest-fetch-mock';
import { fetchSections } from '../redux/directory/directory-reducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Unit test action creators', () => {

    afterEach(() => {
        fetchMock.reset()
    });

    it('Fetch sections error', () => {
        fetch.mockReject('/', {
            body: {section: 'sections'}
        })

        const store = mockStore({ directory: []})

        store.dispatch(fetchSections()).then(() => {
            return expect(store.getActions()).toThrow();
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
            return expect(store.getActions()).toBeTruthy();
        })


    })
})

