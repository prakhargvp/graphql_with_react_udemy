import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
	render() {
		if(this.props.data.loading) { return <div>Loading....</div>; }

		return (
			<div>
				<Link to="/">Back</Link>
				<h1>{this.props.data.song.title}</h1>
			</div>
		);
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);