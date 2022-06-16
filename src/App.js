import Header from './components/header';
import Card from './components/card';
import data from './data';

export default function App() {
	console.log(data);
	return (
		<div className="container">
			<Header />
			<Card />
		</div>
	);
}
