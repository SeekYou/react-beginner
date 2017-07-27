import React from 'react';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>水烧开了</p>;
	} else {
		return <p>水还没烧开</p>;
	}
}

class StateCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			temperature: e.target.value
		});
	}

	render() {
		const temperature = this.state.temperature;
		return (
			<fieldset>
				<legend>输入一个摄氏温度</legend>
				<input type="text" value={temperature} onChange={this.handleChange}/>
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		)
	}
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>水烧开了</p>;
	} else {
		return <p>水还没烧开</p>;
	}
}

export default StateCalculator;
