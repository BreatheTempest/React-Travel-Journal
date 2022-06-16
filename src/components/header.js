import img from '../images/earth.png';

export default function Header() {
	return (
		<header>
			<img src={img} alt="Earth Logo" />
			<h2> my travel journal.</h2>
		</header>
	);
}
