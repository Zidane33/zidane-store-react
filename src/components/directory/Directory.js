import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';

class Directory extends React.Component {
	constructor(props){
		super(props)
		this.state={
			section: [{
				title: 'Hats',
				image: '',
				id: 1,
			},
			{
				title: 'Sneakers',
				image: '',
				id: 2,
			},
			{
				title: 'Jackets',
				image: '',
				id: 3,
			},
			{
				title: 'Accessories',
				image: '',
				id: 4,
			},
			{
				title: 'Pants',
				image: '',
				id: 5,
			},
			]
		}
	}
	render() {
		return (
			<div>
				{this.state.section.map(({id, title, image}) => (
					<MenuItem image={image} key={id} title={title} />
				))}
			</div>
		)
	}
}

export default Directory; 
