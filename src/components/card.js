import img from '../images/location-icon.png';

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.imageUrl} alt="" />
			<div className="info">
				<div className="top">
					<img src={img} alt="" />
					<p className="location">{props.location}</p>
					<a href={props.googleMapsUrl} className="map">
						View on Google Maps
					</a>
				</div>
				<h1>{props.title}</h1>
				<div className="date">
					<span className="startDate">{props.startDate}</span>
					<span> - </span>
					<span className="endDate">{props.endDate}</span>
				</div>
				<p className="description">{props.description}</p>
			</div>
		</div>
	);
}
