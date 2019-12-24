import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component{

	renderSongs() {
		return this.props.data.songs.map(({id, title}) => (
				<li key={id} className="collection-item">{title}</li>
		));
	}
	render() {

		if(this.props.data.loading) { return <div>Loading....</div>; }

		return (
			<ul className="collection">
				{this.renderSongs()}
			</ul>
		);
	}
}

const query = gql`
	{
		songs {
		id
	    title
	  }
	}
`;

export default graphql(query)(SongList);
