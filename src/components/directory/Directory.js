import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory-selector';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';

const Directory = ({ sections }) =>
		 (
			<div className='directory-menu'>
				{sections.map(({id, title, image, size}) => (
					<MenuItem image={image} key={id} title={title} size={size}/>
				))}
			</div>
		);

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory); 
