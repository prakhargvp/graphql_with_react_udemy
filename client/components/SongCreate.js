import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {

	constructor(props) {
		super(props);

		this.state = { title: '' };
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.mutate({
			variables: { title: this.state.title },
			refetchQueries: [{ query }]
		}).then(() => hashHistory.push('/'));
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Link to="/" className="back">
					<i className="material-icons">keyboard_backspace</i>
					Back
				</Link>
				<h1>Create A New Song</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<label>Song Title:</label>
					<input 
					onChange={event => this.setState({ title: event.target.value })} 
					value={this.state.title}
					/>
					<button className="btn waves-effect waves-light purple darken-3">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const mutation = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}
`;

export default graphql(mutation)(SongCreate);