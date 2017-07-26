import React from 'react';

// function NumberList(props) {
// 	const numbers = props.numbers;

// 	const listItems = numbers.map((number) => 
// 		<li key={number.toString()}>{number}</li>
// 	)

// 	return (
// 		<ul>{listItems}</ul>
// 	)
// }

function ListItem(props) {
	const value = props.value;
	return (
		<li>{value}</li>
	)
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => 
		<ListItem key={number.toString()} value={number} />
	);

	return (
		<ul>
			{listItems}
		</ul>
	)
}

export default NumberList;