import React from 'react';

class EssayForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'Please write an essay about your favorite DOM element.'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		alert('An essay was submitted: '+this.state.value);
		e.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name: 
					<textarea value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="submit"/>
			</form>
		)
	}
}

export default EssayForm;