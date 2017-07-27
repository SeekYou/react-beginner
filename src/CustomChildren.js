import React from 'react';

// const Contacts = <h1>h哈哈</h1>;
// const Chat = <p>houh</p>;
function Contacts() {
	return <h1>你好</h1>
	
}

function Chat() {
	return (
		<p>嘎嘎嘎</p>
	)
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="SplitPane-left">
				{props.left}
			</div>
			<div className="SplitPane-right">
				{props.right}
			</div>
		</div>
	)
}

function App() {
	return (
		<SplitPane left={<Contacts />} right={<Chat />} />
	)
}

export default App;