import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
	render() {

		const { song } = this.props.data;
		if(!song) { return <div>Loading....</div>; }

		return (
			<div>
				<Link to="/" className="back">
					<i className="material-icons">keyboard_backspace</i>
					Back
				</Link>
				<h1>{this.props.data.song.title}</h1>
				<LyricList lyrics={song.lyrics} />
				<LyricCreate songId={this.props.params.id} />
			</div>
		);
	}
}

export default graphql(fetchSong, {
	options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);