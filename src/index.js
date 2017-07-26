import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Warning';
import NumberList from './NumberList';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
// 	<h1>Hello, world!</h1>,
// 	document.getElementById('root')
// 	)

// function Welcome(props) {
// 	return <h1>Hello,{props.name}</h1>
// }

// const element=<Welcome name='sara' />;
// function Bpp() {
// 	return (
// 		<div>
// 			<Welcome name='hah' />
// 			<Welcome name='hah' />
// 			<Welcome name='hah' />
// 			<Welcome name='hah' />
// 		</div>
// 		)
// }

// ReactDOM.render(
// 	<Bpp />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<Clock date={new Date()} />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<Clock />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<Toggle />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<LoginControl />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<Page />,
// 	document.getElementById('root')
// )

const numbers=[1,2,3,4,5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById('root')
)
registerServiceWorker();
