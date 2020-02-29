import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor(props){
		super(props)
		this.state={
			section: [{
				title: 'Hats',
                image: 'https://i.ibb.co/cvpntL1/hats.png',
				id: 1,
			},
			{
				title: 'Sneakers',
                image: 'https://i.ibb.co/px2tCc3/jackets.png',
				id: 2,
			},
			{
				title: 'Jackets',
                image: 'https://i.ibb.co/0jqHpnp/sneakers.png',
				id: 3,
			},
			{
				title: 'Accessories',
                image: 'https://i.ibb.co/GCCdy8t/womens.png',
				id: 4,
                size: 'large',
			},
			{
				title: 'Pants',
                image: 'https://i.ibb.co/R70vBrQ/men.png',
				id: 5,
                size: 'large',
			},
			]
		}
	}
	render() {
		return (
			<div className='directory-menu'>
				{this.state.section.map(({id, title, image, size}) => (
					<MenuItem image={image} key={id} title={title} size={size}/>
				))}
			</div>
		)
	}
}

export default Directory; 
