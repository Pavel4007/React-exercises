import React from 'react';
import './App.css';
import List from './components/List';

function App() {
	const dummyList = [
		{
			"id": "1",
			"title": "Bananas",
			"price": "3.49",
			"quantity": "1"
		},
		{
			"id": "2",
			"title": "Apples",
			"price": "1.79",
			"quantity": "2"
		},
		{
			"id": "3",
			"title": "Eggs",
			"price": "0.48",
			"quantity": "30"
		}
	]

	return (
		<div className="App">
			<List items={dummyList}/>
		</div>
	);
}

export default App;