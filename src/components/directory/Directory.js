import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections, areSectionsLoaded } from '../../redux/directory/directory-selector';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';
import { fetchSections } from '../../redux/directory/directory-reducer';

class Directory extends React.Component {
    
    componentDidMount(){
        this.props.dispatch(fetchSections());
    }

    render(){
        const { areSectionsLoaded, sections } = this.props;
        if(!areSectionsLoaded){
            return(<h1>Loading</h1>);
        }

		return (
			<div className='directory-menu'>
				{sections.map(({id, title, image}) => (
					<MenuItem image={image} key={id} title={title} />
				))}
			</div>
		);
    }
}

const mapStateToProps = state => ({
    sections: selectDirectorySections(state),
    areSectionsLoaded: areSectionsLoaded(state)
})

export default connect(mapStateToProps)(Directory); 
