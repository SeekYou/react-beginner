import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Warning';
import NumberList from './NumberList';
import NameForm from './Form1.js';
import EssayForm from './Form2.js';
import SelectForm from './SelectForm.js';
import MoreInput from './MoreInput';
import StateCalculator from './StateCalculator';
import Calculator from './StateCalculator1.js';
import WelcomeDialog from './ContainerChildren.js';
import CustomChildren from './CustomChildren';


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

// const numbers=[1,2,3,4,5];
// ReactDOM.render(
// 	<NumberList numbers={numbers} />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<NameForm />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<EssayForm />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<SelectForm />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<MoreInput />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<StateCalculator />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<Calculator />,
// 	document.getElementById('root')
// )

// ReactDOM.render(
// 	<WelcomeDialog />,
// 	document.getElementById('root')
// )

ReactDOM.render(
	<CustomChildren />,
	document.getElementById('root')
)

registerServiceWorker();
