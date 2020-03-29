const INITIAL_STATE =  
    {
        sections: [{
            title: 'Hats',
            image: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'Shoes',
            image: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Jackets',
            image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Womens',
            image: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/womens'
        },
        {
            title: 'Mens',
            image: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/mens'
        },
        ]
    }

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;
