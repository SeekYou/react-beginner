import React from 'react';

class SelectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'asfdd'
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		console.log('change');
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		alert('Your favorite flavor is :' +this.state.value);
		e.preventDefault();
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Pick your favorite La Croix flavor:
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="asf">asf</option>
						<option value="asfeee">asfeee</option>
						<option value="asffff">asffff</option>
						<option value="asfdd">asfdd</option>
					</select>
					<input type="submit" value="submit"/>
				</label>
			</form>
		)
	}
}

export default SelectForm;
